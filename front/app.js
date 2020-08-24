import './styles/app.css';

import {equipoService} from './services/equipoService';

document.getElementById('equipo-form').addEventListener('submit', e => {
    e.preventDefault();
    const equipo = document.getElementById('equipoInput').value;
    // console.log(equipo);

    equipoService.creaEquipo(equipo);
});
