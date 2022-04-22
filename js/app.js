console.log("Hola mundo");
class tarea{
    constructor(nombre,tipo,comienzo,duracion){
        this.nombre=nombre;
        this.tipo
        this.comienzo=parseInt(comienzo) ;
        this.duracion=parseInt(duracion);
        this.final=0;
    }

    calcularDuracion(){
        this.final= this.comienzo+this.duracion;
    }

    cargar(){
        this.tipo= parseInt(prompt("¿Que tipo de tarea desea agregar? (1:Física, 2:Hogareña, 3:Estudiantil)"));
        this.nombre= prompt("Ingrese el nombre de la tarea.");
        this.comienzo= parseInt(prompt("Ingrese el horario de comienzo de la tarea. (formato 24 hs sin los dos puntos)"));
        this.duracion= parseInt(prompt("Ingrese la duracion estimada de la tarea. (formato 24 hs sin los dos puntos)"));

    }
    mostrar(){
        if(this.tipo==1){
            alert("Tarea fisica agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        }
        else if(this.tipo==2){
            alert("Tarea hogareña agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        }
        else if(this.tipo==3){
            alert("Tarea estudiantil agendada: " + this.nombre + ". Horario de comienzo: " + this.comienzo + "hs. Horario estimado de finalizacion: " + this.final + "hs.");
        }
        else alert("Error: tipo de tarea inexistente");
    }
}




let cantidad = parseInt(prompt("¿Cuantas tareas desea agregar a la lista?"));
const tareas = [];

for(i=0;i<cantidad;i++){
const tarea1= new tarea;
tarea1.cargar();
tarea1.calcularDuracion();
tarea1.mostrar();
tareas.push(tarea1);
}

for(j=0;j<cantidad;j++){
    tareas[j].mostrar();
}
 



 