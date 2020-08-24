import {equipoService} from './services/equipoService';
import {partidoService} from './services/partidoService';

let estadoRegistroLleno = false;
let estadoRegistrando = true;

export class UI {

    // ESTADOS

    static registrando () {
        return estadoRegistrando;
    }

    static registroLleno () {
        return estadoRegistroLleno;
    }

    static cambiaModo() {
        if (UI.registrando()) {
            UI.generaPartidos();
        } else {
            UI.calculaGuardaTotales();
        }
    }

    static renderizaModoBotones () {
        console.log(UI.registrando()?"Reg:si":"Reg:no");
        console.log(UI.registroLleno()?"4:si":"4:no");

        document.getElementById('botonModo').innerHTML = this.registrando() ? ">>" : "<<" ;
        document.getElementById('botonModo').disabled = this.registroLleno() ? false : true;

        document.getElementsByClassName('registro').disabled = !this.registrando();
    }

    // EQUIPOS

    static async renderizaEquipos () {
        const equipos = await equipoService.obtieneEquipos();
        console.log(equipos);
        const contenedorEquipos = document.getElementById('equiposContainer');
        contenedorEquipos.innerHTML = '';
        let conteoEquipos = 0;
        equipos.forEach(equipo => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td><a href="#" class="btn btn-danger btn-sm delete" _id="${equipo._id}">🗑</a></td>
            <td>${equipo.name}</td>
            <td>${equipo.score}</td>
            `;
            contenedorEquipos.appendChild(tr);
            conteoEquipos++;
        });
        console.log(`conteo: ${conteoEquipos}`);
        // console.log(conteoEquipos);
        estadoRegistroLleno = conteoEquipos === 4;
        this.renderizaModoBotones();
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
        // Limpia los partidos anteriores
        const partidos = await partidoService.obtienePartidos();
        partidos.forEach(async (partido) => await partidoService.borraPartido(partido._id));

        const equipos = await equipoService.obtieneEquipos();
        // console.log("Equipos:");
        // console.log(equipos);
        const combs = equipos.flatMap((v,i) => equipos.slice(i+1).map(w => ({v,w}))).map(comb => ({id1:comb.v._id, id2:comb.w._id}))
        // console.log("Combinaciones:");
        // console.log(combs);
        combs.forEach(async (comb) => {
            await partidoService.creaPartido(comb.id1,comb.id2);
        })
        estadoRegistrando = false;
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
            <td><input type="number" value="${partido.p1}" class="puntosPartido equipoUno"/></td>
            <td><input type="number" value="${partido.p2}" class="puntosPartido equipoDos"/></td>
            <td><label>${partido.id2}</label></td>
            `;
            contenedorPartidos.appendChild(tr);
        })
    }

    static async actualizaPuntaje (partido,equipo,puntos) {
        await partidoService.actualizaPartido(partido,equipo,puntos)
    }

    static async calculaGuardaTotales () {
        
        // TODO: Calcular totales
        estadoRegistrando = true;
        this.renderizaModoBotones();
    }
}
