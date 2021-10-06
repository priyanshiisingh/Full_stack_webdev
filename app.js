// enters user input into the console
const input = document.querySelector('input')
const button = document.querySelector('button')

const getdata = async(item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`

    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
}


button.addEventListener('click', (e) => {
    getdata(input.value)
})


// var input = document.querySelector('input')
// const add=document.querySelector('button')
// add.addEventListener('click', (event)=>{

//   console.log(input.value)})

//data.hits.foreach