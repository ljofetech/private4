// Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, имеющих поля {name, age},
// и возвращает объект со средним возрастом и именем самого старшего человека.

function getInfo(persons) {
    let array = []
    let middleAge = 0
    let maxAge = 0
    let maxAgeName = ""

    persons.forEach(function (item, index) {
        array.push(persons[index].age)
    })

    middleAge = array.sort(function (a, b) {
        return a - b
    })[array.length / 2]

    maxAge = array.sort().slice(-1)

    persons.forEach(function (item, index) {
        if (persons[index].age === maxAge[0]) {
            maxAgeName = persons[index].name
        }
    })

    return console.log(`Middle age person: ${middleAge}, Oldest person: ${maxAgeName}`)
}

getInfo([
    {name: "Ivan", age: 3},
    {name: "Robert", age: 13},
    {name: "Gusto", age: 11},
    {name: "Richard", age: 50},
])