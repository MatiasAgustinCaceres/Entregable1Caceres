// ------------------------ Datos ------------------------
const especializaciones = [
  { nombre: "Espada", profesion: "Guerrero", descripción: "Al elegir la espada como tu arma seguiras el camino del Caballero. Disiplinados y valerosos gerreros.", precio: 0 },
  { nombre: "Hacha", profesion: "Guerrero", descripción: "Al elegir la hacha como tu arma seguiras el camino del Bárbaro. Salvajes y feroces gerreros.", precio: 0 },
  { nombre: "Maza", profesion: "Guerrero", descripción: "Al elegir la maza como tu arma seguiras el camino del Templario. Resistentes e incorruptibles gerreros.", precio: 0 },
  { nombre: "Libro de mágia elemental", profesion: "Mago", descripción: "El Libro de mágia elemental te llevará por el camino de los Hechiceros. Poderosos magos capaces de manipular los elementos y la naturaleza.", precio: 0 },
  { nombre: "Báculo de invocación", profesion: "Mago", descripción: "El Báculo de invocación te llevará por le camino del los Invocadores. Poderosos magos capaces de invocar criaturas. Ya sean, o no, de este mundo.", precio: 0 },
  { nombre: "Amuleto de Druida", profesion: "Mago", descripción: "El Amuleto de Druida te llevará por le camino del los Druidas. Poderosos magos capaces de sanar cualquier Herida y con el don de la clarividencia.", precio: 0 },
  { nombre: "Arco", profesion: "Picaro", descripción: "Dominar el Arco te permitirá eliminar a tus enemigos antes de que ellos puedan tocarte.", precio: 0 },
  { nombre: "Dagas", profesion: "Picaro", descripción: "Dominar las Dagas te permitirá eliminar a tus enemigos antes de que estos noten tu presencia. Las sombras serán tus mejores aliadas.", precio: 0 },
  { nombre: "Bastón de monje", profesion: "Picaro", descripción: "Dominar Bastón de monje requiere de una impecable agilidad y autocontrol. Tu mente y cuerpo deben ser uno.", precio: 0 }
];


// ------------------------ Funciones ------------------------
export function mensajeDeBienvenida(){
    let opcionElecta = parseInt(prompt(`Bienvenido a "RPG Academy". Priemro, necesitamos que elijas una profesión: \n
            1- Guerrero. 
            2- Mago. 
            3- Pícaro. 
        `));

    while(!opcionElecta || opcionElecta < 1 || opcionElecta > 3 ){
        opcionElecta = parseInt(prompt(` Por favor, ingresá una de las opciónes correcas: \n
            1- Guerrero. 
            2- Mago. 
            3- Pícaro. 
        `));
    }
    return opcionElecta;
}

function casteoANombrePropio(profesionElecta){

    switch (profesionElecta){
        case 1:
            profesionElecta = "Guerrero";
            break;
        case 2:
            profesionElecta = "Mago";
            break;
        case 3:
            profesionElecta = "Picaro";
            break;
        default:
            alert("No debería aber llegado acá. Algo se rompió :(")
            break;
    }
    return profesionElecta; 
}

function mensajeDeeleccionDeEspecializacion(especializacionesFiltradas, profesionElecta){

    let mensaje = `Has elegido ser un ${profesionElecta}. Priemro, necesitamos que elijas una especialización: \n 

        1- ${especializacionesFiltradas[0].nombre}.\n ${especializacionesFiltradas[0].descripción}
        2- ${especializacionesFiltradas[1].nombre}.\n ${especializacionesFiltradas[1].descripción}
        3- ${especializacionesFiltradas[2].nombre}.\n ${especializacionesFiltradas[2].descripción}`

    let especializacionElecta = parseInt(prompt(mensaje));

    return especializacionElecta;
}

export function eleccionDeEspecializacion(profesionElecta){

    profesionElecta = casteoANombrePropio(profesionElecta);

    const especializacionesFiltradas = especializaciones.filter(especializacion => especializacion.profesion === profesionElecta);
    mensajeDeeleccionDeEspecializacion(especializacionesFiltradas, profesionElecta);

}