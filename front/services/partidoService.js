// if (process.env.NODE_ENV !== 'prod')
//   require('dotenv').config();

// const PARTIDO_API = `${process.env.API_URL}games`;
const API_URL = "http://localhost:5678/api/";
const PARTIDO_API = `${API_URL}games`;

export class partidoService {

    static async obtienePartidos() {
        const r = await fetch("http://localhost:5678/api/games");
        const partidos = await r.json();
        return partidos;
    }

    static async creaPartido(idEquipo1,idEquipo2) {
        const r = await fetch("http://localhost:5678/api/games", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },body: JSON.stringify({
                id1: idEquipo1,
                id2: idEquipo2
            })
        })
    }

    static async actualizaPartido(idPartido,puntosEquipo1,puntosEquipo2) {
        const r = await fetch(`${"http://localhost:5678/api/games"}/${idPartido}`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: {
                p1: puntosEquipo1,
                p2: puntosEquipo2
            }
        });
        const data = await r.json();
        console.log(data);
    }

    static async borraPartido(idPartido) {
        const r = await fetch(`${"http://localhost:5678/api/games"}/${idPartido}`,{
            method: 'DELETE',
        })
        const data = await r.json();
        console.log(data);
    }
}
