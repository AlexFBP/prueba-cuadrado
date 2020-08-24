// if (process.env.NODE_ENV !== 'prod')
//   require('dotenv').config();

// const EQUIPO_API = `${process.env.API_URL}teams`;
const API_URL = "http://localhost:5678/api/";
const EQUIPO_API = `${API_URL}teams`;

export class equipoService {

  static async obtieneEquipos() {
    const resp = await fetch("http://localhost:5678/api/teams");
    const equipos = await resp.json();
    return equipos;
  }

  static async creaEquipo(equipo) {
    const resp = await fetch("http://localhost:5678/api/teams", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: equipo
      })
    });
    const data = await resp.json();
    console.log(data);
  }

  static async borraEquipo(id) {
    const resp = await fetch(`${"http://localhost:5678/api/teams"}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await resp.json();
    console.log(data);
  }
}
