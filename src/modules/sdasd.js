/* eslint-disable quotes */
const extra = 'algo extra';
const cosas = ['primer cosa', "segunda cosa", `tercer cosa con ${extra}`];
let numero = 0;

console.log(cosas);

console.log(numero);
setInterval(() => {
  ++numero;
  console.log(numero);
}, 1000);
