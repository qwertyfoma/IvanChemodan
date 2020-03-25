//18
//Задание 2 +++
let a = /http:+/.test('https://istr www.sitre sitee');
console.log("На http:// -", a);
let a1 = /https:+/.test('https://hgjhgj http://fghf sitee');
console.log("На https:// -", a1);

//Задание 4 +++
let b = /jpg+/.test('asdasdasdasd.jpeg asdasdasdcxz');
console.log("На .jpg -", b);
let b1 = /jpeg+/.test('asdasdasdasd.jpeg asdasdasdcxz');
console.log("На .jpeg -", b1);

//Задание 6 +++
let c = /\d{12}/.test('123456789101');
console.log("Строка из 12: ", c);

//Задание 8
let d = /\d{2}\.\d{2}\.\d{4}/.test('01.01.2001');
console.log('Формат даты: ', d);

//Задание 10
let d1 = /.+@.+/.test('asd@mail.ru');
console.log('Email: ', d1);

//19 
// Задание - 2 +++
let str192 = 'a1b c34d x567z';
let arr = str192.match(/\d/g);

function arraySum(array){ 
	var rezult = 0; 
	for(var i = 0; i < array.length; i++){
		rezult += array[i]; 
	} console.log('Задание 19-2 ',rezult); 
} 
arraySum(arr);

//20 - Задание 2 +++
let str202 = '31.12.2025';
let res202 = str202.match(/(31+).(12+).(2025+)/);

console.log('Найденное: ',res202[0]);
console.log('1-й карман: ',res202[1]);
console.log('2-й карман: ',res202[2]);
console.log('3-й карман: ',res202[3]);

//21 - Задание 1 +++
let str21 = '12 34 56 78';
let res21 = str21.replace(/([1-9]+)([1-9]+)/g, '$2$1');
console.log('Задание 21: ', res21);

//22 - Задание 1 +++
let str22 = 'a1b2c3';
let res22 = str22.replace(/\d+/g, function (match) {
	return match + match;
});
console.log(res22);

//22 - Задание 2 +++
let str222 = 'sss site.ru zzz site.com kkk';
let res222 = str222.replace(/site\...+/g, function (match) {
	return '<a href="http://' + match + '>" ' + match + '"</a>';
});
console.log(res222);

//23 - Задание 1 +++
let str23 = 'aaa bbb ccc xyz';
let res23 = str23.replace(/([a-z])\1\1/g, '3 одинаковых');
console.log(res23);

//25 - Задание 2 +++
let str252 = '<a href="" class="eee" id="zzz">';
let clas = str252.match(/eee+/g);
let idi = str252.match(/zzz+/g);
let res252 = clas + ' ' + idi;

console.log(res252); 

//26 - Задание 1 +++
let str26 = 'aaa [2] bbb [3] ccc [12] ddd';
let res26 = str26.replace(/\d+/g, function (match) {
	return match*2;
});
console.log(res26);

//27 - Задание 1 +++
let str27 = '1 23 456 789';
let res27 = str27.search(/\d{3}/);
console.log(res27);

//28 - Задание 1 +++
let str28 = '2025-12-31 12:59:59';
let res28 = str28.split(/[-: ]/);
console.log(res28);
