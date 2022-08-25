'use strict';

// function func(arr) {
// 	arr.slice(1, 1);
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr); // [1, 2, 3]

// function func() {
// 	return '!';
// }
// console.log(func); // увидим код функции

// function func1() {
//     return 3;
// }
// let func2 = func1;
// console.log(func2()); // выведет 3
// console.log(func1() + func2()); // выведет 6

// let func1 = function() { // переменной присвоили безымянную функцию
//     return 1;
// }
// let func2 = function() { 
//     return 2;
// }
// console.log(func1() + func2()) // 3

// let test = function func() { // функциональное выражение
// 	console.log('!');
// }

// function func() { // объявленая функция
// 	console.log('!');
// }

// +function func() { // функциональное выражение
// 	console.log('!');
// }

// console.log(
// 	function func() { // функциональное выражение
// 		console.log('!');
// 	}
// );

// +
// function func() { // функциональное выражение
// 	console.log('!');
// }

// +1;
// function func() { // объявленая функция
// 	console.log('!');
// }

// +1
// function func() { // объявленая функция
// 	console.log('!');
// }

// +1+
// function func() { // функциональное выражение
// 	console.log('!');
// }

// let arr = [ // массив с тремя функциями
//     function() {
//         return 1;
//     },
//     function() {
//         return 2;
//     },
//     function() {
//         return 3;
//     }
// ];
// for (let func of arr) {
//     console.log(func());
// }
// console.log(arr[2]()); // 3

// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// };
// for (let key in obj) {
//     obj[key](); // перебрали объект и вывели результат работы функций
// }

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };
// let sum = 0;
// for (let key in obj) {
//     sum += obj[key]();
// }
// console.log(sum); // сумма возвращаемых чисел

// let math = {
//     square: function(num) {
//         return num ** 2;
//     },
//     cube: function(num) {
//         return num ** 3;
//     },
// }
// console.log(math.square(3)); // 9
// console.log(math.cube(3)); // 27

// let sum = 0;
// let math = {
//     sum: function(arr) {
//         for (let elem of arr) {
//             sum += elem;
//         }
//         return sum;
//     },
//     sumSquare: function(arr) {
//         for (let elem of arr) {
//             sum += elem**2;
//         }
//         return sum;
//     },
//     sumCube: function(arr) {
//         for (let elem of arr) {
//             sum += elem**3;
//         }
//         return sum;
//     },
// }
// console.log(math.sum([1, 2, 3, 4, 5])); // 15
// console.log(math.sumSquare([1, 2, 3, 4, 5])); // 70
// console.log(math.sumCube([1, 2, 3, 4, 5])); // 295

// test (
//     function() {
//         return 1;
//     },
//     function() {
//         return 2;
//     },
//     function() {
//         return 3;
//     },
// );
// function test (func1, func2, func3) { 
//     console.log(func1() + func2() + func3()); // 6
// }

// let get1 = function() { // Function Expression
//     return 1;
// }
// let get2 = function() {
//     return 2;
// }
// let get3 = function() {
//     return 3;
// }
// function test (func1, func2, func3) {
//     console.log(func1() + func2() + func3());
// }

// function get1() { // Function Declaration 
//     return 1;
// }
// function get2() {
//     return 2;
// }
// function get3() {
//     return 3;
// }
// test (get1, get2, get3);
// function test (func1, func2, func3) {
//     console.log(func1() + func2() + func3());
// }

// test(function(num) { // анонимная функция
// 	return num * num;
// });
// function test(func) {
// 	console.log(func(6)); // 36
// }

// test(function func(num) { // Function Declaration с именем func
// 	return num * num;
// });
// function test(func) {
// 	console.log(func(3));
// }

// test(function func(num) { // Function Declaration с именем func
// 	return num * num;
// });
// function test(func) {
// 	console.log(func(3));
// }

// test(function func(num1, num2) {
// 	return num1 + num2;
// });
// function test(func) {
// 	console.log(func(2, 3)); // 5
// }

// function test(num, func1, func2) { // передали параметрами число и функции
//     console.log(func1(num) + func2(num));
// }
// test (3, function(num) {
//     return num ** 2;
// },  
// function(num) {
//     return num ** 3;
// }
// )

// function test (arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let result = test (
//     [1, 2, 3, 4, 5],
//     function(num) {
//         return num * num;
//     }
// );
// console.log (result)

// function test (arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let result = test (
//     [1, 2, 3, 4, 5], 
//     function (num) {
//         return num ** 3;
//     }
// )
// console.log(result); // [1, 8, 27, 64, 125]

// let test = function func() { // именованное функциональное выражение
// 	console.log('!');
// 	test(); // вызываем сами себя
// };
// test();

// function func (num1, num2) {
//     return square (num1) + square (num2); 
// }
// function square (num) {
//     return num ** 2;
// }
// console.log(func(2, 4));

// function func (num1, num2) {
//     function square (num) { // вложенная функция
//         return num ** 2; 
//     }
//     return square(num1) + square(num2);
// }
// console.log(func(2, 3));

// function func (num1, num2) {
//     function square (num) { // вложенная функция
//         return num ** 2;
//     }
//     function cube (num) { // вложенная функция
//         return num ** 3;
//     }
//     return square(num1) + cube(num2);
// }
// console.log(func (2, 2)); // 12

// function test() {
// 	let num;
	
// 	function func() {
// 		console.log(num);
// 	}
	
// 	num = 1
// 	func(); // 1
// 	num = 2
// 	func(); // 2
// }
// test(); 

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
	
// 	func();
// }
// test(1, 2); // 3

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}	
// 	num1 = 2;
// 	func();
// }
// test(1, 2); // 4

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum); // выведет 1
// 	}
	
// 	func(num); // передаем параметр
// }
// test(1); // передаем параметром число

// function test(num) {
// 	function func(localNum) {
// 		num = 2; // меняем переменную num
// 	}
	
// 	func(num);   // передаем параметр
// 	console.log(num);  // выведет 2
// }
// test(1); // передаем параметром число

// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
	
// 	func(num + 1);
// }
// test(1); // 1

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }
// test(1); // 1

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
//         console.log(localNum); // 2
//     }
// 	func(num);
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}	
// 	func(num);
// 	console.log(num); // 2
// }
// test(1);

// function test(num) {
// 	function func(num) {
// 		num = 2; // нельзя получить доступ в внешней переменной num
// 	}
	
// 	func(num);
// 	console.log(num); // 1
// }
// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}	
// 	num = 2;
// 	func(num); // 2
// }
// test(1);


// function test(num) {
// 	function func(num) {
// 		console.log(num); // 1
// 	}
// 	func(num);
// 	num = 2;
// }
// test(1);

// function func1 () {
//     return function() {
//         return 1;
//     }
// }
// function func2 () {
//     return function() {
//         return 2;
//     }
// }
// console.log(func1()() + func2()()); // 3, функции возвращающие функции

// function func() {
// 	return function() {
// 		return function() {
// 			return '!';
// 		};
// 	};
// }
// console.log( func()()() ); // выведет '!'

// function func() {
//     return function(str) {
//         return str;
//     }
// }
// console.log(func()('ddd')); // выведет 'ddd'

// function func(num1) {
// 	return function(num2) {
// 		return num1 + num2;
// 	};
// }
// console.log( func(1)(2) ); // выведет 3

// function func (num1) {
//     return function(num2) {
//         return function(num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }
// console.log(func(1)(2)(3)); // сумма = 6

// function test() {
//     let num = 1;
//     return function() {
//         console.log(num);
//         num += 4;
//     }
// }
// let func = test();
// func(); // 1
// func(); // 2
// func(); // 3
// Счетчик на замыканиях

// function test() {
//     let num = 10;
//     return function() {
//         console.log(num);
//         num--;
//     }
// }
// let func = test();
// func(); // 10
// func(); // 9
// func(); // 8
// func(); // 7

// function test() {
//     let num = 3;
//     return function() {
//         if (num >= 0) {
//             console.log(num);
//             num--;    
//         } else {
//             console.log('отсчет окончен')
//         }
//     }
// } 
// let func = test();
// func(); //3
// func(); //2
// func(); //1
// func(); //0
// func(); //отсчет окончен
// func(); //отсчет окончен

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };

// func()(); // 0
// func()(); // 0
// func()(); // 0

// let counter = 0;
		
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// };

// let func = test;

// let func1 = func();
// let func2 = func();
// func1(); //1
// func2(); //2
// func1(); //3
// func2(); //4

// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test()();
// let func1 = func;
// let func2 = func;
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test();
// let func1 = func();
// let func2 = func();
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

// +function() {
// 	console.log('!');
// }(); // вызов функции на месте (Immediately Invoked Function Expression (IIFE))

// let result = function() {
// 	return '!';
// };	
// console.log(result()); // !

// let result = (function() {
// 	return '!';
// });
// console.log(result()); // !

// (function(str) {
// 	console.log(str); // выведет '!!!'
// })('!!!');

// (function(num1) {
// 	return function(num2) {
//         console.log(num1 ** num2)
//     }
// })(2)(3); // 8

// let func = (function() {
//     let num = 1;
//     return function() {
//         console.log(num);
//         num++;
//     }
// })(); // Замыкание и вызов функции на месте
// func(); // 1
// func(); // 2
// func(); // 3

// let func = (function() {
//     let num = 1;
//     return function() {
//         console.log(num);
//         if (num < 5) {
//             num++
//         } else {
//             num = 1;
//         }
//     }
// })(); // Замыкание и вызов функции на месте
// func(); // 1
// func(); // 2
// func(); // 3
// func(); // 4
// func(); // 5
// func(); // 1
// func(); // 2
// func(); // 3

// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
// 	return result;
// }
// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 2;
// });
// console.log(result); // [1, 4, 9, 16, 25]
// result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 3;
// });
// console.log(result); // [1, 8, 27, 64, 125]

// function each (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push (callback (elem));
//     }
//     return result;
// };
// let res = each ([1, 2, 3, 4 ,5], function (num){
//     return num * 2;
// })
// console.log (res) // [2, 4, 6, 8, 10]

// function each (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push (callback(elem));
//     }
//     return result;
// }
// let res = each ([1, 2, 3, 4 , 5], function cube(num) {
// 	return num ** 3;
// })
// console.log(res);

// function filter (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push (callback(elem));
//     }
//     return result;
// }
// let result = filter ([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// function filter (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push (callback(elem));
//     }
//     return result;
// }
// let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0); // стрелочная функция
// console.log(result);

// function every(arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push (callback(elem));
//     }
//     return result;
// }
// let result = every([1, 2, 3, 4, 5], elem => elem > 0); // стрелочная функция
// console.log(result) // [true, true, true, true, true]

// function each(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push (callback(arr[i][j], j))
//         }    
//     }
//     return result;
// }
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = each(arr, (elem, index) => elem * index > 10);
// console.log(result); // [false, false, false, false, false, true, false, false, true]

// let i = 1;
// function func(){
// 	console.log(i);
// 	i++;
	
// 	if (i <= 10){
// 		func(); // здесь функция вызывает сама себя
// 	}
// }
// func();

// function func(arr) {
// 	console.log(arr.shift(), arr, arr.length);
//     if (arr.length != 0){
//         func(arr);
//     }
// }
// func([1, 2, 3]);

// let arr = [1, 2, 3, 4, 5];
// function func (arr) {
//     console.log (arr.shift());
//     if (arr.length !== 0) {
//         func(arr)
//     }
// }
// func(arr);

// function getSum(arr) {
// 	let sum = arr.shift();
// 	if (arr.length !== 0) {
// 		sum += getSum(arr); // // С помощью рекурсии нашли сумму квадратов элементов
// 	}
// 	return sum;
// }
// console.log(getSum([1, 2, 3]));

// let arr = [1, 2, 3, 4, 5];
// function getSum(arr) {
//     let sum = arr.shift() ** 2;
//     if (arr.length !== 0) {
//         sum += getSum(arr); // С помощью рекурсии нашли сумму квадратов элементов
//     }
//     return sum;
// }
// console.log(getSum(arr))

// Рекурсия и многомерные структуры в JavaScript
// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			// элемент - массив
// 		} else {
// 			// элемент - примитив
// 			console.log(elem); 
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]); // 1

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]); // выведет от 1 до 7

// function func(obj) {
//     for (let elem in obj) {
//         if (typeof obj[elem] == 'object') {
//             func(obj[elem]);
//         } else {
//             console.log(obj[elem]);
//         }
//     }
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}) // от 1 до 9 

// function func(obj) {
//     for (let elem in obj) {
//         if (typeof obj[elem] !== 'object') {
//             console.log(obj[elem]);
//         } 
//     }
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}, p: 4}) // 4

// let arr2 = [];
// function newArr(arr) {
//     for (let elem of arr) {
        
//         if (typeof elem !== 'object') {
//             arr2.push(elem);
//         } else {
//             newArr(elem);
//         }
//     }
//     return arr2;
// }
// console.log(newArr([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])); // [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let sum = 0;
// function func (obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'object') {
//             func (obj[key]);
//         } else {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
// console.log (func ({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})) // 45

// let str = '';
// function newString (arr) {
//     for (let elem of arr) {
//         if (typeof elem == 'object') {
//             newString (elem);
//         } else {
//             str += elem;
//         }
//     }
//     return str;
// }
// console.log(newString(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])); // abcdefgjk

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] + '!';
// 		}
// 	}
// 	return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// function func(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'object') {
//             arr[i] = func(arr[i]);
//         } else {
//             arr[i] = arr[i] ** 2;
//         }
//     }
//     return arr;
// }
// console.log (func([1, [2, 7, 8], [3, 4], [5, [6, 7]]])) // возвели числа массива в квадрат


