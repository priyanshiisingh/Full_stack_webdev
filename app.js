var arr = [1, 2, 3, 4, 5, 6, 7, 8]
    //unshift adds the element in the beginning of the array
    // shift removes element at index 0
    //arr.push adds element to the end of the array

//var newarr = arr.slice(2, 5)
// arr.slice doen't affects the original arr it returns a new edited array
//arr.shift()
//console.log(newarr)

//var newarr = []

//for (var i = 0; i <= arr.length, i++;) {
//    if (arr[i] % 2 === 0) newarr.push(arr[i])
//}


var newarr = arr.filter((element, index) => {
    if (element % 2 === 0) return true
})

console.log(newarr)