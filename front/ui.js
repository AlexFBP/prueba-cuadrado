import {equipoService} from './services/equipoService';

export class UI {

    // EQUIPOS

    static async renderizaEquipos () {
        const equipos = await equipoService.obtieneEquipos();
        // console.log(res);
        const contenedorEquipos = document.getElementById('equiposContainer');
        contenedorEquipos.innerHTML = '';
        equipos.forEach(equipo => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td><a href="#" class="btn btn-danger btn-sm delete" _id="${equipo._id}">🗑</a></td>
            <td>${equipo.name}</td>
            <td>${equipo.score}</td>
            `;
            contenedorEquipos.appendChild(tr);
        });
    }

    static async agregaEquipo (equipo) {
        await equipoService.creaEquipo(equipo);
        this.limpiaFormularioEquipo();
        this.renderizaEquipos();
    }

    static limpiaFormularioEquipo () {
        document.getElementById('equipo-form').reset();
    }

    static async borraEquipo (equipoId) {
        await equipoService.borraEquipo(equipoId);
        this.renderizaEquipos();
    }

    // PARTIDOS

    static async renderizaPartidos () {
    }
}
