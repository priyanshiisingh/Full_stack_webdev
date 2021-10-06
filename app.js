const input = document.querySelector('input')
const button = document.querySelector('button')

const item = input.value
const getdata = async(item) => {
    const url = `https://api.edamam.com/search?app_id=99aea339&app_key=5b5baf66440f0b0d1299647cdc02e53e&q=${item}`

    const res = await fetch(url)
    const data = await res.json()
        // console.log(data.hits)
    data.hits.forEach(recipe => {
        console.log(recipe)
    })
}

button.addEventListener('click', (e) => {
    getdata(input.value)
})