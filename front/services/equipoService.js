const API_URL = "http://localhost:5678/api/";
const EQUIPO_API = `${API_URL}teams`;

export class equipoService {

  static async obtieneEquipos() {
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

  static async creaEquipo(equipo) {
    const resp = await fetch(EQUIPO_API, {
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
    const resp = await fetch(`${EQUIPO_API}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await resp.json();
    console.log(data);
  }
}
