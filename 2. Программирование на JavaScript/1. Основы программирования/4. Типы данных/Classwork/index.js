// Number - числа
// 1. Целые числа
// 2. Дробные числа
let = myAge = 30;
let = itemPrice = 25000.50;

console.log(typeof 1); // определить тип переменной

// String - строка
// 1. Двойные кавычки
// 2. Одинарные кавычки
// 3. Обратные кавычки
// 4. Объединение строк - конкатенация

let firstname = "Сергей";
let lasttname = 'Киселёв';
let myAgeText = `Мой возраст: ${myAge}`;

console.log(myAgeText);

// let fullName = firstname + ' ' + lasttname;
let fullName = `
    Имя: ${firstname}, 
    Фамилия ${lasttname}, 
    Возраст: ${myAge}
`;

console.log(fullName);



// Boolean - истина/ложь
const ADULT_AGE = 18;
let isAdult = myAge >= ADULT_AGE;

console.log(isAdult);


// Сравнения
// Строгое сравнение === (ДжаваСкрипт сначала проверяет, что совпадают типы данных и уже потом значения - считается хорошей практикой использование строгого сравнения)
/// Нестрогое сравнение == ((ДжаваСкрипт может трансформировать разные типы данных)

if (myAge === ADULT_AGE) console.log("Вам 18");


// Null - неопределено
let address = null; 

console.log(typeof address); // БАГ ДЖАВАСКРИПТА - определяет переменную address, как объект

// Undefined - не задано (не присвоено)
let country;
console.log(country);

// Object - объекты

let person = {
    name: 'Сергей',
    surname: 'Киселёв',
    age: 30,
    isAdult: true
};

console.log(person);


