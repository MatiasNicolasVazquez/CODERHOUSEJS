console.log("Hola mundo");
class tarea {
    constructor(nombre, tipo, comienzo, duracion) {
        this.nombre = nombre;
        this.tipo = 0;
        this.comienzo = parseInt(comienzo);
        this.duracion = parseInt(duracion);
        this.final = 0;
    }

    calcularDuracion() {
        this.final = this.comienzo + this.duracion;
    }

    cargar() {
        this.tipo = parseInt(prompt("¿Que tipo de tarea desea agregar? (1: Física, 2: Hogareña, 3: Estudiantil)"));
        this.nombre = prompt("Ingrese el nombre de la tarea.");
        this.comienzo = parseInt(prompt("Ingrese el horario de comienzo de la tarea. (formato 24 hs sin los dos puntos)"));
        this.duracion = parseInt(prompt("Ingrese la duracion estimada de la tarea. (en minutos)"));
    }
    mostrar() {
        if (this.tipo == 1) {
            alert("Tarea fisica agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        } else if (this.tipo == 2) {
            alert("Tarea hogareña agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        } else if (this.tipo == 3) {
            alert("Tarea estudiantil agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        } else alert("Error: tipo de tarea inexistente");
    }
}


const tareas = [];




let cantidad = parseInt(prompt("¿Cuantas tareas desea agregar a la lista?"));

for (i = 0; i < cantidad; i++) {
    const tarea1 = new tarea;
    tarea1.cargar();
    tarea1.calcularDuracion();
    tarea1.mostrar();
    tareas.push(tarea1);
}
/// declare estos arrays aca para que me tomen el array de tareas///
const fisicas = tareas.filter((el) => el.tipo == 1);
const hogarenias = tareas.filter((el) => el.tipo == 2);
const estudiantiles = tareas.filter((el) => el.tipo == 3)


let consulta = prompt("¿Desea ver un resumen de las tareas agendadas?");
if (consulta == "si" || consulta == "Si" || consulta == "SI") {
    let consulta2 = parseInt(prompt("¿Quiere ver un resumen general, o desea un tipo de tarea en especifico? (0 = general, 1 = act. física, 2 = act. hogareña, 3 act. estudiantil"));
    if (consulta2 == 0) {
        for (j = 0; j < cantidad; j++) {
            tareas[j].mostrar();
        }
    } else if (consulta2 === 1) {

        fisicas.forEach(element => {
            element.mostrar();
        });
        console.log(fisicas);

    } else if (consulta2 === 2) {
        hogarenias.forEach(element => {
            element.mostrar();
        });
        console.log(hogarenias);

    } else if (consulta2 === 3) {
        estudiantiles.forEach(element => {
            element.mostrar();
        });
        console.log(estudiantiles);

    } else alert("opcion no valida");

}
 else if (consulta == "No" | consulta == "NO" | consulta == "no") {
    alert("Hasta luego!")
}
 else alert("opcion no valida");