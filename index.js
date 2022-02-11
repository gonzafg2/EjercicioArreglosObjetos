// Arreglos
// Tipo de dato No Primitivo o Complejo

const array = []; // Paréntesis corchetes (Arreglo Vacío)

// Arreglo de Booleanos
const arrayBoolean = [true, false, false, true, false];
arrayBoolean[0]; // true (1)

// Arreglo de String
const arrayString = ["Hola", "Mundo", "!", "¿Qué", "tal?"];
arrayString[4]; // tal?
arrayString.length - 1; // 4
arrayString[arrayString.length - 1]; // tal?

// Arreglo de Number
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arreglos Combinados
const myArray = [1, false, "Hola", "Mundo"];

// Arreglo de Array
const myArrayArray = [
  [1, 2, 3],
  ["Hola", "Mundo"],
  [true, false, true],
];
myArrayArray[myArrayArray.length - 1][1]; // false;
myArrayArray[2][1]; // false;

// Llamar a elementos de un arreglo
// Primer elemento
arrayBoolean[0 /*Indice del elemento*/];

// Último elemento
const lastElementIndex = arrayBoolean.length - 1;
arrayBoolean[lastElementIndex];
arrayBoolean[arrayBoolean.length - 1];

// Longitud de un arreglo (Propiedad)
const longitud = arrayBoolean.length;

// Objetos
// Tipo de dato No Primitivo o Complejo

const objeto = {}; // Objeto Vacío

// Arreglo de Objetos
const arrayObject = [
  {
    nombre: "Juan",
    edad: 30,
  },
  {
    nombre: "Pedro",
    edad: 20,
  },
  {
    nombre: "María",
    edad: 40,
  },
];
arrayObject[1].nombre; // Pedro
// console.log(arrayObject[2].nombre); // Juan

// Podemos definir distintas PROPRIEDADES!
const profe = {
  hijosHumanos: false,
  hijosGatunos: true,
  nombre: "Gonzalo",
  profesion: "Desarrollador Web",
  musica: ["Trance", "Rock", "Reggae"],
  edad: 32,
  hogar: {
    ciudad: "Madrid",
    pais: "España",
  },
  saludar() {
    console.log("Hola soy", this.nombre);
  },
};
// ¿Cómo acceder a la propiedad "nombre"?
profe.nombre; // Gonzalo

// profe.saludar(); // Hola soy Gonzalo

profe.musica[1]; // "Rock"

// Agregar una nueva propiedad
// ¿Cómo agregar una nueva propiedad?
profe.apellido = " Fleming ";
// console.log(profe.apellido.length);
profe.apellido.trim();
//console.log(profe.apellido);

// const nombre = " Gonzalo ".trim();
// console.log(nombre.trim(), nombre.length);

// const nombreNuevo = nombre.trim()
// console.log(nombreNuevo, nombreNuevo.length);

profe.edad = 20;
profe["edad"]; // 20

// Ciclos para Objetos y Arreglos
const arrayString2 = ["Hola", "Mundo", "!", "¿Qué", "tal?"];

for (let i = 0; i < arrayString2.length; i++) {
  // console.log(arrayString2[i]);
}

for (const cadenaTexto of arrayString2) {
  // console.log(cadenaTexto);
}

// arrayString2.forEach((el) => console.log(el.toUpperCase()));

const arrayString2Mayus = arrayString2.map(el => el.toUpperCase());

const names = arrayObject.map(name => name.nombre);
// console.log(names);

// console.log(arrayString2, arrayString2Mayus);

for (const key in profe) {
  // console.log(`${key}: ${profe[key]}`);
}

const initReq = (async () => { 
try {
  const req = await fetch(
    "https://us-central1-apis-varias-mias.cloudfunctions.net/regiones_comunas"
  );
  const comunasChile = await req.json(); // Arreglo de Objetos
  console.log(comunasChile);

  // 1. Crear un arreglo de strings con los nombres de las comunas
  // 2. Crear un arreglo de strings con los nombres de las provincias
  // 3. Crear un arreglo de strings con los nombres de las regiones
  // 4. Crear un arreglo de objetos con las propiedades comuna y id_comuna
  // 5. Crear un arreglo de objetos con las propiedades provincia y id_provincia
  // 6. Crear un arreglo de objetos con las propiedades region y id_region
} catch (error) {
  console.error(error);
}
})();