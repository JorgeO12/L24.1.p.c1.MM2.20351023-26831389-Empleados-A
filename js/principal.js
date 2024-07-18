/**
 * En una empresa se tiene personal obrero y personal administrativo. La empresa necesita determinar 
 * cuál es alguno de los nombres del personal que gana menos 
 * (si no se repite, sólo reportar 1, si se repite, reportar cualquiera) y también el monto promedio 
 * pagado sólo los administrativos.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que 
Juan (obrero) actualmente gana $100, Ana (obrero) gana $50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150:
Uno de los que gana menos: Mary
Monto promedio pagado a administrativos: $175 
 */
import Cl_personas from "./Cl_personas.js";
import Cl_empresa from "./Cl_empresa.js";

let persona = new Cl_personas("Juan", "obrero", 100);
let persona2 = new Cl_personas("Mary", "obrero", 50);
let persona3 = new Cl_personas("Lin", "administrativo", 200);
let persona4 = new Cl_personas("Ana", "obrero", 50);
let persona5 = new Cl_personas("Carlos", "administrativo", 150);

let empresa = new Cl_empresa();
empresa.procesar(persona);
empresa.procesar(persona2);
empresa.procesar(persona3);
empresa.procesar(persona4);
empresa.procesar(persona5); 

let salida = document.getElementById("salida");

salida.innerHTML = `
Uno de los que gana menos: ${empresa.menornombre()}
<br>Monto promedio pagado a administrativos: $${empresa.promedioadministrativos()}
`;

