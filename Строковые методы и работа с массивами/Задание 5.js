// Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества лайков
// ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].

function transformUpvotes(arr) {
    let newArr = []
    arr.forEach(function (item) {
        if (item.includes('k')) {
            newArr.push(Number(item.slice(0, -1)) * 1000)
        } else {
            newArr.push(item)
        }
    })
    return console.log(newArr)
}

transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k'])