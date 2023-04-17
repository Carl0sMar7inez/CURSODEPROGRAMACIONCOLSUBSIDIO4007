//alert("hola mundo javascript")

var queeslowrider= "El Lowrider fue una forma de manifestacion de la cultura chicana (cultura mexicana-estadounidense) que poco a poco fue permeando en la cultura afroamericana y otras en general.";

var quesetrataellowrider = "en la cual se modificaban coches clasicos, como una forma de vivir y manifestarse ante la sociedad.";

var cuandosecreoellowrider = 1946;

var historiadellowrider= "1946, despues del final de la Segunda Guerra Mundial, muchos artistas estadounidenses de la epoca y referentes en la moda estilizaban el aspecto de sus vehiculos bajandolos de manera sutil para darles un toque estilizado. En ocasiones se ponian sacos de arena en el maletero del vehiculo para poder bajarlos a una altura considerable con el fin de lograr su meta.";

var evolucionoellowrider = "De igual manera el estilo en materia mecánica fue evolucionando para ser lo que es actualmente, pues en sus inicios casi siempre se modificaba usando neumáticos y rines de medida más pequeña, recorte de espiras en los resortes de la suspensión o en las de muelles (ballesta) y también se aplanaba la curva colocando bloques para bajar más la suspensión o en ocasiones se ponía una placa de magnesio o algún otro metal para que al rozar saltaran chispas, característica que también se volvió muy popular.";

var esunmovimientolaculturalowrider = "Sin embargo en las comunidades afroamericanas y mexicanas de aquel tiempo, esto mismo se fue convirtiendo en un movimiento social el cual poco a poco fue permeando desde los años 1950 junto al estilo Custom, aunque en medida aislada y faltaría más tiempo para que el movimiento se consolidara en más comunidades."

var problemasconlaautoridad = "Sin embargo como también ocurrió con los Hot Rods y Customs se vieron en algunos problemas con la autoridad y algunas legislaciones comenzaron a prohibir que se modificaran las suspensiones y que las piezas del vehículo bajaran más allá de la llanta."

var decadadellowrider1970 = "Su apogeo se produjo durante los años 1970, en donde la cultura underground de la música disco aunada al prestigio que otorgaba el ser el chulo en el bajo mundo requería un vehículo único y personalizado. Fue ahí donde los Low Riders encontraron un surgimiento muy propio a la época. De hecho muchos autos de ese entonces en algunas ciudades estadounidenses como Los Ángeles, San Francisco, Nueva York, Miami y demás comenzaron a reconocerse por ese estilo; al igual que el estilo Dub de hoy en día también los autos grandes y lujosos fueron los ideales para este mismo estilo."

var primerosistemasdellowrider = "En esta época es cuando se comienzan a desarrollar los primeros sistemas hidráulicos que básicamente consistían en suspensiones modificadas para ser controladas mediante dispositivos eléctricos que accionaban válvulas encargadas de distribuir fluido hidráulico, similar al de los equipos de construcción que para este caso servían para hacer bajar o subir el vehículo según lo requiriese el conductor, descubriendo también que con este sistema podría saltar este mismo desde el eje delantero, incluso bajando una esquina o un lado del vehículo, esto en respuesta a las rígidas leyes que no permitían bajar el vehículo, y así podía pasar desapercibido ante la autoridad y podía bajar cuando no hubiese vigilancia estricta, pero también podía subirse para poder atravesar caminos en un relativo mal estado. A partir de este punto el Low Rider comenzaría a cimentar las bases del estilo que actualmente se ve y que deleita a propios y extraños. Posteriormente los sistemas se hicieron más compactos y eficientes con ayuda del avance en tecnología permitiendo reducir el costo de instalación pero sin olvidar la calidad del trabajo en cuanto a este sistema."

var decadadellowrider1980 = "Aunque tuvo un decaimiento con la llegada de la década de los años 1980, principalmente por la crisis energética y el advenimiento de los coches compactos que dejaron en segundo plano a los automóviles más grandes, . La naciente cultura underground del hip hop también adoptó el estilo y lo usó más como una imagen de prestigio y respeto."

var seutilizanautosclasicosyhapasadofronteras = "Sin embargo, aun sigue siendo utilizado en autos clásicos y en menor medida en otros más recientes. Con el paso del tiempo y hasta nuestros días el estilo se ha vuelto perfectamente reconocible y aceptado por la mayoría de las comunidades estadounidenses. Incluso ha traspasado fronteras y llegado a lugares como Europa y Asia (principalmente Japón)."

var esunasuntoprofesional = "Asimismo, se ha convertido en un asunto un poco más profesional, celebrándose concentraciones y competiciones de este tipo de vehículos, los cuales hacen alarde de sus sistemas por ganar puntos y trofeos. "

var sesiguepracticainformalmente = "hay en muchos lugares reuniones informales que incluso reúnen a familias latinas, afroamericanas y demás con el afán de entretenerse sanamente, siendo tomado en cuenta también como un estilo de vida al no tener nada más productivo para hacer."

/* 
document.write(que es lowrider?);
document.write(de que trata el lowrider?);
*/

/* 
document.write(historia del lowrider?);
document.write(como evoluciono el lowrider?);
*/

/* 
document.write(decadadellowrider1970?);
document.write(decadadellowrider1980?);
*/

/* 
document.write(seutilizanautosclasicosyhapasadofronteras?);
document.write(esunasuntoprofesional?);
document.write(sesiguepracticainformalmente?);
*/

var datos = document.getElementById("datos");

datos.innerHTML= `
<h2>soy el div datos<h2>
<h2>que es lowrider?: ${queeslowrider}<h2>
<h2>de que trata el lowrider?: ${quesetrataellowrider}<h2>
<h2>cuando se creo el lowrider?: ${1946}<h2>
<h2>historia del lowrider?: ${historiadellowrider}<h2>
<h2>como evoluciono el lowrider?: ${evolucionoellowrider}<h2>
<h2>es un movimiento la cultura lowrider?: ${esunmovimientolaculturalowrider}<h2>
<h2>el lowrider tuvo problemas con la autoridad?: ${problemasconlaautoridad}<h2>
<h2>decada del low rider 1970?: ${decadadellowrider1970}<h2>
<h2>primeros sistemas del low rider ?: ${primerosistemasdellowrider}<h2>
<h2>decada del low rider 1980?: ${decadadellowrider1980}<h2>
<h2>se siguen utilizando autos clasicos para low rider? ha paso fronteras?: ${seutilizanautosclasicosyhapasadofronteras}<h2>
<h2>se volvio un asunto mas profesional?: ${esunasuntoprofesional}<h2>
<h2>si sigue practicando informamente?: ${sesiguepracticainformalmente}<h2>
` ;

// sentencia condicional

if (cuandosecreoellowrider >= 1946) 
{
     datos.innerHTML += `<h1> Cuando se creo el low rider: "El lowrider se creo Desde aproximadamente 1946"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1>Antes de 1946,</h1>`;
}


if (esunmovimientolaculturalowrider >= "Sin embargo en las comunidades afroamericanas y mexicanas de aquel tiempo, esto mismo se fue convirtiendo en un movimiento social el cual poco a poco fue permeando desde los años 1950 junto al estilo Custom, aunque en medida aislada y faltaría más tiempo para que el movimiento se consolidara en más comunidades.") 
{
     datos.innerHTML += `<h1> Es un Movimiento la cultura low rider: "SI en las comunidades afroamericanas y mexicanas de aquel tiempo, esto mismo se fue convirtiendo en un movimiento social el cual poco a poco fue permeando desde los años 1950"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> "NO es un movimiento la cultura lowrider"</h1>`;
}


if (decadadellowrider1970 >= " en donde la cultura underground de la música disco aunada al prestigio que otorgaba el ser el chulo en el bajo mundo requería un vehículo único y personalizado.") 
{
     datos.innerHTML += `<h1> En que decada fue su apogeo: "Su apogeo se produjo durante los años 1970"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> "NO tenia apogeo"</h1>`;
}


if (primerosistemasdellowrider >= "En esta época es cuando se comienzan a desarrollar los primeros sistemas") 
{
     datos.innerHTML += `<h1> primeros sistemas low rider: " se comienzan a desarrollar los primeros sistemas hidráulicos que básicamente consistían en suspensiones modificadas para ser controladas mediante dispositivos eléctricos que accionaban válvulas encargadas de distribuir fluido hidráulico, similar al de los equipos de construcción que para este caso servían para hacer bajar o subir el vehículo según lo requiriese el conductor, descubriendo también que con este sistema podría saltar este mismo desde el eje delantero, incluso bajando una esquina o un lado del vehículo, Posteriormente los sistemas se hicieron más compactos y eficientes con ayuda del avance en tecnología permitiendo reducir el costo de instalación pero sin olvidar la calidad del trabajo en cuanto a este sistema."</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> "NO tenia sistemas los low rider"</h1>`;
}


if (decadadellowrider1980 >= "principalmente por la crisis energetica y el advenimiento de los coches compactos que dejaron en segundo plano a los automóviles más grandes, los latinos y en algunos casos los afroamericanos lo siguieron aplicando hasta en vehículos importados. La naciente cultura underground del hip hop también adoptó el estilo y lo usó más como una imagen de prestigio y respeto.")

{
     datos.innerHTML += `<h1>"NO tenia problemas en esa decada"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> Aunque tuvo un decaimiento con la llegada de la década de  1980: "principalmente por la crisis energética y el advenimiento de los coches compactos que dejaron en segundo plano a los automóviles más grandes.</h1>`;
}



if (seutilizanautosclasicosyhapasadofronteras >= "principalmente por la crisis energetica y el advenimiento de los coches compactos que dejaron en segundo plano a los automóviles más grandes, los latinos y en algunos casos los afroamericanos lo siguieron aplicando hasta en vehículos importados. La naciente cultura underground del hip hop también adoptó el estilo y lo usó más como una imagen de prestigio y respeto.")

{
     datos.innerHTML += `<h1>"NO se sigue usando y no ha pasado fronteras"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> se sigue utilizando autos clasicos y ha pasadofronteras el low rider : "aun sigue siendo utilizado en autos clásicos y en menor medida en otros más recientes. Con el paso del tiempo y hasta nuestros días el estilo se ha vuelto perfectamente reconocible y aceptado por la mayoría de las comunidades estadounidenses. Incluso ha traspasado fronteras y llegado a lugares como Europa y Asia (principalmente Japón).</h1>`;
}



if (esunasuntoprofesional >= "Asimismo, se ha convertido en un asunto un poco más profesional.")

{
     datos.innerHTML += `<h1>"NO se ha convertido en asunto profesional"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> se volvio un asunto profesional: "se ha convertido en un asunto un poco más profesional, celebrándose concentraciones y competiciones de este tipo de vehículos, los cuales hacen alarde de sus sistemas por ganar puntos y trofeos.</h1>`;
}



if (sesiguepracticainformalmente >= "hay en muchos lugares reuniones informales, que realizan low rider")

{
     datos.innerHTML += `<h1>"NO hay solucion para este tema"</h1>`;
} 
else 
{
     datos.innerHTML += `<h1> el low rider sigue siendo informal: "hay en muchos lugares reuniones informales que incluso reúnen a familias latinas, afroamericanas y demás con el afán de entretenerse sanamente, siendo tomado en cuenta también como un estilo de vida al no tener nada más productivo para hacer.</h1>`;
}