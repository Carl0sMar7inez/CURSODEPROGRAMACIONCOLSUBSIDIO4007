//alert("hola mundo javascript")

var nombre = "Carlos Martinez";

var edad = 29;

var estatura = 175;

/* 
document.write(nombre);
document.write(edad);
*/

var datos = document.getElementById("datos");

datos.innerHTML= `
<h2>soy el div datos<h2>
<h2>mi nombre es: ${nombre}<h2>
<h2>mi edad es: ${edad}<h2>
<h2>mi estatura es: ${estatura}<h2>

` ;

// sentencia condicional

if (estatura >= 175) 
{
     datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
} 
else 
{
     datos.innerHTML += `<h1>Eres una persona BAJA</h1>`;
}