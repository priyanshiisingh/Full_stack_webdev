var button = document.querySelector('button')
var body = document.querySelector('body')

//const callbackfuntion = (event) => {
//    console.log(event.target)
//    console.log(input.value)

//}

const callbackfuntion = (event) => {

    body.classList.toggle('dark')



    /*const inputvalue = input.value
    const element = document.createElement('li')
    const textnode = document.createTextNode(inputvalue)
    element.appendChild(textnode)
    list.appendChild(element)*/
}

button.addEventListener("click", callbackfuntion)