//18
//Задание 2 +++
let a = /http:+/.test('https://asdasdasdasd asdasd asdasdasdasd');
console.log("На http:// -", a);
let a1 = /https:+/.test('https://asdasdasdasd http://asdasd asdasdasdasd');
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

//19 - Задание 1 +++
let str19 = 'site.ru sss site.com zzz site.net';
let rez19 = str19.match(/site\..../g, '!');
console.log(rez19);

//20 - Задание 1 +++
let str20 = 'sss domain.ru zzz';
let res20 = str20.match(/(domain+).(ru+)/);

console.log('Найденное: ',res20[0]);
console.log('1-й карман: ',res20[1]);
console.log('2-й карман: ',res20[2]);

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

//23 - Задание 1 +++
let str23 = 'aaa bbb ccc xyz';
let res23 = str23.replace(/([a-z])\1\1/g, '3 одинаковых');
console.log(res23);

//24 - Задание 1

//25 - Задание 1 +++
let str25 = 'func1() func2() func3()';
let res25 = str25.replace(/func+/g);

console.log(str25);

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
