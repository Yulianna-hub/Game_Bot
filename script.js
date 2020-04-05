' use strict ';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let x;
let number;

const getRandomNum = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function guessedNumber() {

let number = getRandomNum(1, 100);
console.log(number);
   
let hello = confirm('Hola, amigo!! Поиграем?');
if(hello == false) {
    alert('Игра окончена!');
}
return (function checkNumber() {
    debugger;
 if (hello == true) {  
x = prompt('Угадай число от 1 до 100.');
if (number < x) {
    x = prompt('Загаданное число меньше. Введи новое число!'); 
        checkNumber();
    } else if (number > x) {
    x = prompt('Загаданное число больше. Введи новый вариант!');
        checkNumber();
    } else if (number == x) {
    alert('Поздравляю! Вы угадали!');
    let convey = confirm('Хотите сыграть еще?');
        if (convey == true) {
            checkNumber();
        }else if (convey == false) {
            alert('Игра окончена!');
        }
        return convey;
    
    } else if (!isNumber(x)) {
        return prompt('Введи число!');
    }
if (x == false) {
        alert('Игра окончена!');
         }      
    }  
}());   
}
guessedNumber();


