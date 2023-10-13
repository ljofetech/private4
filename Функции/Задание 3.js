// Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения.
// Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

function repeatWord(word, count) {
    let result = "";
    for (let i = 1; i <= count; i = i + 1) {
        result += word + i + ", ";
    }
    return console.log(`"${result.slice(0, -2)}"`);
}

repeatWord('слово', 3);