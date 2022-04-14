console.log("hola mundo");
let entrada = parseInt(prompt("¡Ingrese un numero por favor!"));
/* Se ingresa un numero al entrar a la pagina web. En cada iteración del ciclo se le suma uno,
 y posteriormente se lo multiplica por 2. Los resultados a mostrarse si se ingrasara un 1 son: 4 6 8 10 12 14 16 18 20 22.
 Para el uso de condicional, meti un if de que si las cuentas mencionadas anteriormente dan como resultado 10, no se muestre*/
for (i = 0; i < 10; i++) {
    entrada = entrada + 1;
    let resultado = entrada * 2;
    if(resultado==10){
        continue;}
    alert(resultado);
}
const blanco=" ";
let oracion="";

let palabra=prompt("Ingrese una palabra");
while(palabra!="basta"){
    oracion= oracion + blanco + palabra;
    alert(oracion);
    palabra=prompt("Ingrese otra palabra");

}

