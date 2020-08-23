import React, { useState, useRef } from "react";
import { IEquipo } from '../../../models/equipo';

type FormElement = React.FormEvent<HTMLFormElement>;

export const ListaEquipos = () => {
  const [newEquipo, setNewEquipo] = useState<string>("");
  const [equipos, setEquipos] = useState<IEquipo[]>([]);
  const equipoInput = useRef<HTMLInputElement>(null);

  const handleSubmitEquipo = (e: FormElement) => {
    e.preventDefault();
    if (equipos.length < 4) {
      addEquipo(newEquipo);
    }
    setNewEquipo("");
    equipoInput.current?.focus();
  };

  const addEquipo = (name: string) => {
    const nuevosEquipos: IEquipo[] = [...equipos, { name, puntos:0 }];
    setEquipos(nuevosEquipos);
  };

  return (
    <>
      <form onSubmit={handleSubmitEquipo}>
        <input
            type="text"
            onChange={(e) => setNewEquipo(e.target.value)}
            value={newEquipo}
            ref={equipoInput}
            autoFocus
        />
        <button>Agregar</button>
      </form>
      <div>
        {equipos.map((eq: IEquipo, i: number) => (
          <div key={i}>
            {eq.name}
            {/*
                <label></label>
                <button></button>
                */}
          </div>
        ))}
      </div>
    </>
  );
};
