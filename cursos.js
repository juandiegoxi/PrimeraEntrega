let curso1 = {
	id: 3540579,
	nombre: 'Base de Datos',
	duracion: '150 horas',
	valor: 150000
};

setTimeout(function(){
console.log('el id del curso es ' +curso1.id+ '\n' + 'nombre ' + curso1.nombre +'\n'+'duracion de ' + curso1.duracion +'\n'+
'por un valor de ' + curso1.valor + '\n');
}, 2000);

let curso2 = {
	id: 54138,
	nombre: 'Varias variables',
	duracion: '120 horas',
	valor: 160000
};

setTimeout(function(){
console.log('el id del curso es ' +curso2.id+ '\n' + 'nombre ' + curso2.nombre +'\n'+'duracion de ' + curso2.duracion +'\n'+
'por un valor de ' + curso2.valor + '\n');
}, 4000);


let curso3 = {
	id:984168,
	nombre: 'Diseño de software',
	duracion: '80 horas',
	valor: 100000
};

setTimeout(function(){
console.log('el id del curso es ' +curso3.id+ '\n' + 'nombre ' + curso3.nombre +'\n'+'duracion de ' + curso3.duracion +'\n'+
'por un valor de ' + curso3.valor + '\n');
}, 6000);


let curso4 = {
	id: 874138,
	nombre: 'Fisica',
	duracion: '140 horas',
	valor: 180000
};

setTimeout(function(){
console.log('el id del curso es ' +curso4.id+ '\n' + 'nombre ' + curso4.nombre +'\n'+'duracion de ' + curso4.duracion +'\n'+
'por un valor de ' + curso4.valor + '\n');
}, 8000);



module.exports = {
	curso1,
	curso2,
	curso3,
	curso4
};