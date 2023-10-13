// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
// Пояснение: например, getPercents(30, 200) должно вернуть 60.

function getPercents(percent, number) {
    let result = (number / 100 * percent);
    return console.log(`${percent}% percent of ${number} is ${result}%`);
}

getPercents(30, 200);
