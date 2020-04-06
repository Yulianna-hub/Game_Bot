' use strict ';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


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
if(!hello) {
    alert('Игра окончена!');
}
if (hello) {
    alert('Угадай число от 1 до 100.');
}
return (function checkNumber() {
let x = prompt('Угадай число.');
if (isNumber(x)) {
    if (number < x) {
        alert('Загаданное число меньше. Введи новое число!');
        return checkNumber();
        } else if (number > x) {
        alert('Загаданное число больше. Введи новый вариант!');
        return checkNumber();
        } else if (number == x) {
        alert('Поздравляю! Вы угадали!');
        let convey = confirm('Хотите сыграть еще?');
            if (convey == true) {
                guessedNumber();
            }else if (convey == false) {
                alert('Игра окончена!');
            }
        }
    } else if (x === null){
        alert('Игра окончена!');
    } else {
        alert('Введи число!');
         checkNumber();
    }    

}()); 
}
guessedNumber();


