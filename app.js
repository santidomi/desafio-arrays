let nombres=[];
let nombre = prompt ("ingrese nombre");
let apellidos =[];
let apellido = prompt ("ingrese apellido");
nombres.push(nombre)
apellidos.push(apellido)

if (nombres.includes(nombre)){
    alert ("vienvenido" + nombres + apellidos)
}

const edad = prompt ("Ingrese edad");
if (edad > 18){
    alert ("Puede ingresar")
}else{
    alert("vualva a intentar cuando sea mayor de edad")
}