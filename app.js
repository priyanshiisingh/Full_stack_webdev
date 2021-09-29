var list = document.querySelector('ul')
var arr = ['go tot gym', 'eat oatmeal', 'work']

arr.push('complete the assignment')
console.log(list)
for (var i = 0; i < arr.length; i++) {
    var element = document.createElement('li')
    var textnode = document.createTextNode(arr[i])
    console.log(element)
    element.appendChild(textnode)
    console.log(element)
    list.appendChild(element)
}