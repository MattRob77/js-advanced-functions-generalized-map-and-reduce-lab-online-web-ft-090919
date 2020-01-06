// Add your functions here
function map (arr, func) {
    let newArr = []
    arr.forEach((item) => {
        newArr.push(func(item))
    })
    return newArr
}