// Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу прибавляет 4, у каждого нечётного
// отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.

// В качестве проверки: calculate([15, 2, 3, 5, 6]) должна вернуть 20.

function calculate(array) {
    let newArray = []
    let sum = 0
    array.forEach(function (item) {
        if (item % 2 === 0) {
            newArray.push(item += 4)
        } else if (item % 2 !== 0) {
            newArray.push(item -= 2)
        }
    })
    newArray.forEach(function (item, index) {
        if (item % 13 === 0) {
            newArray.splice(index, 1)
        }
    })
    newArray.forEach(function (item) {
        sum += item
    })
    return sum
}

console.log(calculate([15, 2, 3, 5, 6]))