import './styles/app.css';
import { UI } from './ui'

document.addEventListener('DOMContentLoaded', () => {
    UI.renderizaEquipos();
    UI.renderizaPartidos();
    UI.renderizaModoBotones();
})

document.getElementById('equipo-form').addEventListener('submit', e => {
    e.preventDefault();
    const equipo = document.getElementById('equipoInput').value;
    UI.agregaEquipo(equipo);
});

document.getElementById('equiposContainer').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        UI.borraEquipo(e.target.getAttribute('_id'));
    }
});

document.getElementById('botonModo').addEventListener('click', e => {
    e.preventDefault();
    console.log('Boton Modo!');
    UI.cambiaModo();
});

// document.getElementsByClassName('puntosPartido').addEventListener('onChange', e => {
//     console.log('cambio celda');
// })
