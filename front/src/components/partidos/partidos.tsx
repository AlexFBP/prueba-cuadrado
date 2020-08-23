import React, { useState } from "react";
import { IEquipo } from '../../../models/equipo';
import { IPartido } from '../../../models/partido';

export const Partidos = () => {

  const [equipos, setEquipos] = useState<IEquipo[]>([])
  const [partidos, setPartidos] = useState<IPartido[]>([])

  const generaPartidos = () => {

    // TODO: Cargar los equipos con la API
    const newEquipos: IEquipo[] = [
      {name: "A"},
      {name: "B"},
      {name: "C"},
      {name: "D"}
    ]
    setEquipos(newEquipos);
    console.log("Equipos:");
    console.log(newEquipos);
    console.log(equipos);

    // crear combinaciones
    const combs = newEquipos.flatMap((v, i) =>
      newEquipos.slice(i + 1).map((w) =>
        ({v,w})
      ) 
    ).map((comb) => ({eq1:comb.v,eq2:comb.w,p1:0,p2:0}));
    setPartidos(combs);
    console.log(combs);
  };

  return (
    <div>
      <button onClick={() => generaPartidos()}>Generar</button>
      <button>Guardar</button>
      {partidos.map((p: IPartido, i:number) => (
        <div key={i}>
          <div>
            <label>{p.eq1.name}</label>
            <input type="number" value={p.p1} />
          </div>
          <div>
            <label>{p.eq2.name}</label>
            <input type="number" value={p.p2} />
          </div>
        </div>
      ))}
    </div>
  );
};
