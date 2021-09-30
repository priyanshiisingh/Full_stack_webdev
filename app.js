var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

//const callbackfuntion = (event) => {
//    console.log(event.target)
//    console.log(input.value)

//}

const callbackfuntion = (event) => {
    const inputvalue = input.value
    const element = document.createElement('li')
    const textnode = document.createTextNode(inputvalue)
    element.appendChild(textnode)
    list.appendChild(element)
}

button.addEventListener("click", callbackfuntion)