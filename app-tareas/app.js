const fs = require ("fs");
const tareasJSON = fs.readFileSync("./tareas.json", "utf-8")
const tareas = JSON.parse(tareasJSON)
/*console.log(tareas)*/
const accion = process.argv[2];
const archivo = require("./funcionesDeTareas")
//const funcionesTareas = fs.readFileSync("./funcionesDeTareas.js", "utf-8")
let arrayTareas = archivo.leerArchivo();

switch (accion) {
   case "listar":
      for (let i=0; i< arrayTareas.length; i++){
          console.log(` (${i+1})  ${tareas[i].titulo} - ${tareas[i].estado} `)
      } 
   break
   case undefined:
      console.log("Atención - Tienes que pasar una acción.")
   break 
   default:
      console.log("No entiendo qué quieres hacer.")
}
