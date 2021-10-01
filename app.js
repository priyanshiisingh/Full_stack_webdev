const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')

const resultbox = document.querySelector('.result')

//console.log(a, b, add, multiply)

//const sum = () => {
//    const result = parseInt(a.value) + parseInt(b.value)
//    resultbox.innerHTML = result

//}

//const multi = () => {
//    const result = parseInt(a.value) * parseInt(b.value)
//    resultbox.innerHTML = result

//}


const calculate = (event, operation) => {
    console.log(event.target.value)
    if (operation == 'add') {
        console.log('adding')
    } else if (operation == 'multiply') {
        console.log('multiplying')
    }

}
add.addEventListener('click', (event) => {
        return calculate(event, 'add')
    })
    // dummy function returning(calling the actual function) the value 
    //of calculate function
    //replies to the click event or else will always be displayed in the
    //console

//

// we were calling a function call instead of its signature 

multiply.addEventListener('click', (event) => {
    return calculate(event, 'multiply')
})

//we're making a function return another function