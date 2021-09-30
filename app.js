//call back function
//it means that foreach is implicitly calling the callback function that's y we do not need to call it explicitly?


var arr = ['gym', 'cook', 'eat']

//for (var i = 0; i <= arr.length; i++) {
//   console.log(arr[i])
//}

var callbaclfunction = (ele, mystry) => {
    console.log(ele, mystry)
}

arr.forEach(callbaclfunction)

arr.forEach((element, index) => {
    console.log(element, index)
})