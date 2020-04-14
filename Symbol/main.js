// Symbol'ы
//------------1-------------//
console.log('↓Задача 1↓')
let obj = {
	a: '1',
	b: '2',
	c: '3',
};

let sym = Symbol();
obj[sym] = 'test';

for (let key in obj){
	console.log(obj[key]);
}


//------------2-------------//
console.log('↓Задача 2↓')
let obj1 = {
	a: '1',
	b: '2',
	c: '3',
}

let sym1 = Symbol();
obj1[sym1] = function() {
	console.log('!');
}

for (let key1 in obj1){
	console.log(obj1[key1]);
}


//------------3-------------//
console.log('↓Задача 3↓')
let obj2 = {
	'Строка1': 100,
	'Строка2': 450,
	'Строка3': 210,
}

let sym2 = Symbol();
obj2[sym2] = function(){
	let sum = 0;
	for (let key2 in obj2){
		sum += obj2[key2];
	}
	console.log('Сумма элементов = ' + sum);
}
obj2[sym2]();


//------------4-------------//
console.log('↓Задача 4↓') 
let arr = [1, 2, 3, 4, 5];

let sym3 = Symbol();
arr[sym3] = function(){
	let sum1 = 0;
	for (let key3 in arr){
		sum1 += arr[key3];
	}
	console.log('Сумма элементов = ' + sum1);
}
arr[sym3]();


//------------5-------------//
console.log('↓Задача 5↓')
let arr1 = [1, 2, 3, 4, 5, 6];

let sym31 = Symbol.for();
arr1[sym31] = function(){
	let sum11 = 0;
	for (let key31 in arr1){
		sum11 += arr1[key31];
	}
	console.log('Сумма элементов = ' + sum11);
}
arr1[sym31]();


//------------6-------------//
console.log('↓Задача 6↓')

