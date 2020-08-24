// Servicio de abstracción de la API

import { IEquipo } from '../../models/equipo';

const BACK_SERVER = "http://localhost:5678/api/";
const EQUIPO_API = `${BACK_SERVER}teams`

export class equipoDBconn {
    static async obtieneEquipos () {
        const resp = await fetch(EQUIPO_API);
        const equipos = await resp.json();
        return equipos;
        /*
        return [
            {name: "A", puntos: 0},
            {name: "B", puntos: 0},
            {name: "C", puntos: 0},
            {name: "D", puntos: 0}
        ]
        */
    }

    static async creaEquipo (equipo: string) {
        const resp = await fetch(EQUIPO_API,{
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify({
                name: equipo,
                score: 0
            })
        });
        const data = await resp.json();
        console.log(data);
    }

    static async borraEquipo (id: string) {
        const resp = await fetch(`${EQUIPO_API}/${id}`,{
            method: 'DELETE'
        })
        const data = await resp.json();
        console.log(data);
    }
}
