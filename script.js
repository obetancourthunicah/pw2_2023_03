var intEdad = 0;
let strNombre = 'Hola Mundo';
strNombre = "Esto es modificable";

const strApellido = "Hola Mundo";
// strApellido = "No se puede Modificar";

/*
comentario en bloque
 */

if (strApellido == "Hola Mundo") {

} else if (strApellido === "Hola Mundo") {

} else {

}

switch (intEdad) {
    case 1:
        //hacer algo
        break;
    case 2:
        // hacer algo
        break;
    default:
        // Si no hay coincidencias anteriors
}

let strEdad = intEdad > 18 ? "Mayor de Edad": "Menor de Edad";

strEdad = "";
if (intEdad > 18) {
    strEdad = "Mayor de Edad";
} else {
    strEdad = "Menor de Edad";
}

for (var i = 0 ; i <= 100 ; i++) {
    // Cuantas Veces a 99, b 100, c 101
}

let whileControler = 0
while ( whileControler <= 10) {
    // expresiones  a 4 , b 5, c 6
    whileControler += 2;
}


let doController = 0;
do {
    // 0, 1, 2
    doController += 1
} while (doController < -5);

// Estructuras de Datos
// array
var list = ["color1","color2","color3"];
console.log(list[2]); // color3

var diccionario = {
    "nombre": "Fulanito de Tal",
    "telefono": "20000000",
    "correo": "fulanitodetal@somemail.com",
    "edad": 18
};

var tablaContactos = [];

tablaContactos.push(diccionario);

tablaContactos.push({
    "nombre": "Sutanita de Tal",
    "telefono": "40000000",
    "correo": "sutanitadetal@somemail.com",
    "edad": 14
});

tablaContactos.push({
    "nombre": "Mengano de Tal",
    "telefono": "40000000",
    "correo": "lumbo@somemail.com",
    "edad": 24
});

/*
for( var i = 0; i <= tablaContactos.length; i++){
    
}
*/
//MAP recorre por cada Elemento y Ejecuta la funcion y espera un retorno
let newtablaContactos = tablaContactos.map(function(currentItem, index){
    currentItem["processes"] = index % 2 === 0;
    return currentItem;
});

tablaContactos.forEach((currentItem, index)=>{ //arrow functions Funciones de flecha gorda
    const { nombre, correo } = currentItem; //Destructuring
    console.log(`Log de ${nombre} con correo ${correo}`); //template String
});

let menganito = tablaContactos.find((currentItem)=>{
    return currentItem.nombre === "Mengano de Tal";
});

fetch(
    'https://api.pokemontcg.io/v2/cards?name=charizard'
).then((data)=>{
    console.log(data);
})