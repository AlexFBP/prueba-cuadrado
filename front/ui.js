import {equipoService} from './services/equipoService';
import {partidoService} from './services/partidoService';

export class UI {

    // EQUIPOS

    static async renderizaEquipos () {
        const equipos = await equipoService.obtieneEquipos();
        console.log(equipos);
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

    static async generaPartidos () {
        const equipos = await equipoService.obtieneEquipos();
        // console.log("Equipos:");
        // console.log(equipos);
        const combs = equipos.flatMap((v,i) => equipos.slice(i+1).map(w => ({v,w}))).map(comb => ({id1:comb.v._id, id2:comb.w._id}))
        // console.log("Combinaciones:");
        // console.log(combs);
        combs.forEach(async (comb) => {
            await partidoService.creaPartido(comb.id1,comb.id2);
        })
        this.renderizaPartidos();
    }
        
    static async renderizaPartidos () {
        const partidos = await partidoService.obtienePartidos();
        const contenedorPartidos = document.getElementById('partidosContainer');
        contenedorPartidos.innerHTML = '';
        console.log(partidos);
        partidos.forEach(partido => {
            const tr = document.createElement('tr');
            tr.setAttribute('_id',partido._id)
            tr.innerHTML = `
            <td><label>${partido.id1}</label></td>
            <td><input type="number" value="${partido.p1}" /></td>
            <td><input type="number" value="${partido.p2}" /></td>
            <td><label>${partido.id2}</label></td>
            `;
            contenedorPartidos.appendChild(tr);
        })
    }

    static async calculaGuardaTotales () {
        this.renderizaEquipos();
    }
}
