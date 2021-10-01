const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')

const resultbox = document.querySelector('.result')

console.log(a, b, add, multiply)

const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)
    resultbox.innerHTML = result

}

const multi = () => {
    const result = parseInt(a.value) * parseInt(b.value)
    resultbox.innerHTML = result

}

add.addEventListener('click', sum)
multiply.addEventListener('click', multi)