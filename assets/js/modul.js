import pelota from './json.json' with { type:'json' }
import { asincronia } from './async.js';

//Manejo de json
// console.log(pelota);
// console.log(pelota.peso);
// console.log(pelota.fabricante.direccion);

//Manejo de promesas
const objeto = await asincronia(pelota);

console.log(objeto.textura);