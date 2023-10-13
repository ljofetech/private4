// Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.

function showOddEven() {
    for (let cnt = 0; cnt <= 5; cnt += 1) {
        if (cnt % 2 !== 0) {
            console.log(`ODD: ${cnt}`)
        }
    }
    for (let cnt = 5; cnt <= 10; cnt += 1) {
        if (cnt % 2 === 0) {
            console.log(`EVEN: ${cnt}`)
        }
    }
}

showOddEven()