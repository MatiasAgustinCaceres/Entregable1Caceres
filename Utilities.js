// ------------------------ Datos ------------------------
const productos = [
  { nombre: "Espada", descripción: "Al elegir la espada como tu arma seguiras el camino del Caballero. Disiplinados y valerosos gerreros.", precio: 0 },
  { nombre: "Hacha", descripción: "Al elegir la hacha como tu arma seguiras el camino del Bárbaro. Salvajes y feroces gerreros.", precio: 0 },
  { nombre: "Maza", descripción: "Al elegir la maza como tu arma seguiras el camino del Templario. Resistentes e incorruptibles gerreros.", precio: 0 },
  { nombre: "Libro de mágia elemental", descripción: "El Libro de mágia elemental te llevará por el camino de los Hechiceros. Poderosos magos capaces de manipular los elementos y la naturaleza.", precio: 0 },
  { nombre: "Báculo de invocación", descripción: "El Báculo de invocación te llevará por le camino del los Invocadores. Poderosos magos capaces de invocar criaturas. Ya sean, o no, de este mundo.", precio: 0 },
  { nombre: "Amuleto de Druida", descripción: "El Amuleto de Druida te llevará por le camino del los Druidas. Poderosos magos capaces de sanar cualquier Herida y con el don de la clarividencia.", precio: 0 },
  { nombre: "Arco", descripción: "Dominar el Arco te permitirá eliminar a tus enemigos antes de que ellos puedan tocarte.", precio: 0 },
  { nombre: "Dagas", descripción: "Dominar las Dagas te permitirá eliminar a tus enemigos antes de que estos noten tu presencia. Las sombras serán tus mejores aliadas.", precio: 0 },
  { nombre: "Bastón de monje", descripción: "Dominar Bastón de monje requiere de una impecable agilidad y autocontrol. Tu mente y cuerpo deben ser uno.", precio: 0 }
];


// ------------------------ Funciones ------------------------
export function mensajeDeBienvenida(){
    let opc = parseInt(prompt(`Bienvenido a "RPG Academy". Priemro, necesitamos que elijas una profesión: \n
            1- Guerrero. 
            2- Mago. 
            3- Pícaro. 
        `))

    while(!opc || opc < 1 || opc > 3 ){
        opc = parseInt(prompt(` Por favor, ingresá una de las opciónes correcas: \n
            1- Guerrero. 
            2- Mago. 
            3- Pícaro. 
        `))
    }
}