import * as funciones from './Utilities.js';

const nombreDelIngresante = funciones.mensajeDeBienvenida();
const profesionElecta = funciones.mensajeDeEleccionDeProfesion();
const registroElecto = funciones.eleccionDeEspecializacion(profesionElecta);
const creditosRestantes = funciones.calculoDeCreditos(registroElecto.creditosRequeridos);
alert(funciones.mostrarCredencial(nombreDelIngresante, registroElecto.profesion, registroElecto.nombre, creditosRestantes));
