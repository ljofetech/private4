// Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10.
// Затем говорит "Введите 20", потом 40 и т.д.

// Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное.
// Когда пользователь введёт больше 100, напишите "Спасибо!" и остановите программу.

let sum = 0;
let cnt;
const int = 10
let integer = 1;

while (sum < 100) {

    cnt = prompt(`Введите ${integer * int}`);

    cnt = Number(cnt)

    switch (cnt) {
        case 10:
            sum += 10
            integer += 1
            break;
        case 20:
            sum += 10
            integer += 1
            break;
        case 30:
            sum += 10
            integer += 1
            break;
        case 40:
            sum += 10
            integer += 1
            break;
        case 50:
            sum += 10
            integer += 1
            break;
        case 60:
            sum += 10
            integer += 1
            break;
        case 70:
            sum += 10
            integer += 1
            break;
        case 80:
            sum += 10
            integer += 1
            break;
        case 90:
            sum += 10
            integer += 1
            break;
        case 100:
            alert("Спасибо!")
            break;
    }

}