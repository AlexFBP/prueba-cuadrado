import React, { useState } from "react";
import { IEquipo } from '../../../models/equipo';
import { IPartido } from '../../../models/partido';

export const Resultados = () => {

    const [equipos, setEquipos] = useState<IEquipo[]>([]);
    const [partidos, setPartidos] = useState<IPartido[]>([]);

    const calculaResultados = () => {}

    return (
        <div>
        {equipos.map((eq,i) => (
            <div>
                <div>{eq.name}</div>
                <div>{eq.puntos}</div>
            </div>
        ))}
        </div>
    );
}
