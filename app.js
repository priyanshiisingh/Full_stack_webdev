var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores = []

var deleteItem = (value) => {
    const index = chores.indexOf(value)
    chores.splice(index, 1)
    console.log(chores)
}

//console.log(chores.includes('gym'))
// checks if entry already in the array

const callbackfunc = (event) => {
    // console.log(input.value)

    const inputValue = input.value
    if (chores.includes(input.value)) {
        console.log('already exists')
    } else {
        const inputValue = input.value
        chores.push(inputValue)
        const element = document.createElement('li')
        const textNode = document.createTextNode(inputValue)
        element.appendChild(textNode)
        list.appendChild(element)
            //element.addEventListener('click', (e) => { deleteItem(console.log(e.target.innerHTML)) })
        element.addEventListener('click', (e) => {
            console.log(e.target.remove)
        })

    }
}

// to remove the element use e.target.remove

button.addEventListener('click', callbackfunc)