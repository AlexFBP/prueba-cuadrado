# Generalidades

## Problema

> El ejercicio es hacer un cuadrangular de futbol, dícese registrar 4 equipos y hacer un todos contra todos
>
> Eso quiere decir que equipo a vs equipo b
>
> Equipo c vs equipo d
>
> Se debe poder registrar el marcador  de los partidos y se debe poder ver una tabla con las posiciones

## Servicios (Planteados)

1. Registro de Equipos `/r/eqipo` POST
   - Recibe: El nombre del equipo
   - Retorna: Exito o fallo. El fallo será, entre otras causas, si ya están completos los 4 equipos
   - Implica: Asignar un `ID-EQUIPO` a cada equipo
2. Generar Cuadrangular `/ver/cuadrangular/`
   - Recibe: Nada
   - Retorna: Exito o fallo. El fallo será, entre otras causas, si aún no están completos los 4 equipos
   - Implica:
     - Creación de Cuadrangulares (y asignación de un `ID-PARTIDO` a cada uno)
     - Deshabilitación del Registro de Equipos
3. Actualizar Partido `/r/partido/ID-PARTIDO`
4. Consultar Posiciones
