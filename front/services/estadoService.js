const API_URL = "http://localhost:5678/api/";
const ESTADO_API = `${API_URL}state`;

export class estadoService {
    static async leeEstado (estado) {
        const r = await fetch(`${ESTADO_API}/${estado}`);
        const valor = await r.json();
        return valor;
    }

    static async actualizaEstado (estado,valor) {
        const r = await fetch(`${ESTADO_API}/${estado}`,{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                value: valor
            })
        });
    }

    static async creaEstado (estado,valor) {
        const r = await fetch(ESTADO_API, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: {
                name: estado,
                value: valor
            }
        });
    }

    static async borraEstado (estado) {
        const r = await fetch(`${ESTADO_API}/${estado}`, {
            method: 'DELETE'
        })
    }
}
