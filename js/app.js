console.log("Hola mundo");

function agregarTarea(a) {
    if (a == 1) {
        let fisica = prompt("Ingrese el nombre de la tarea");
        let comienzo = parseInt(prompt("Ingrese el horario estimado de comienzo (formato 24hs (sin los dos puntos))"));
        let duracion = parseInt(prompt("Ingrese la duracion estimada de la actividad en minutos"));
        let final = comienzo + duracion;
        alert("Tarea fisica agendada: " + fisica + ". Horario de comienzo: " + comienzo + "hs. Horario estimado de finalizacion: " + final + "hs.");

    }
    else if(a==2){
        let hogar = prompt("Ingrese el nombre de la tarea");
        let comienzo = parseInt(prompt("Ingrese el horario estimado de comienzo (formato 24hs (sin los dos puntos))"));
        let duracion = parseInt(prompt("Ingrese la duracion estimada de la actividad en minutos"));
        let final = comienzo + duracion;
        alert("Tarea hogareña agendada: " + hogar + ". Horario de comienzo: " + comienzo + "hs. Horario estimado de finalizacion: " + final + "hs.");
    }
    else if(a==3){
        let estudios = prompt("Ingrese el nombre de la tarea");
        let comienzo = parseInt(prompt("Ingrese el horario estimado de comienzo (formato 24hs (sin los dos puntos))"));
        let duracion = parseInt(prompt("Ingrese la duracion estimada de la actividad en minutos"));
        let final = comienzo + duracion;
        alert("Tarea relacionada al estudio agendada: " + estudios + ". Horario de comienzo: " + comienzo + "hs. Horario estimado de finalizacion: " + final + "hs.");
    }

    else {
        alert("Actividad no valida");
    }
}

let tareas = parseInt(prompt("¿Cuantas tareas desea agregar a la lista?"));

for(i=1;i<=tareas;i++){
let actividad = parseInt(prompt("¿Que tipo de actividad desea añadir a la lista? (1 física, 2 hogareña, 3 estudios) "));
agregarTarea(actividad);    
}