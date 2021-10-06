const input = document.querySelector('input')
const button = document.querySelector('button')
let itemname = document.querySelector('h5')
let itemimage = document.querySelector('img')
let itemrecipe = document.querySelector('a')

// console.log(itemname, itemimage, imagerecipe)

const item = input.value
const getdata = async(item) => {
    const url = `https://api.edamam.com/search?app_id=99aea339&app_key=5b5baf66440f0b0d1299647cdc02e53e&q=${item}`
    const res = await fetch(url)
    const data = await res.json()

    data.hits.forEach(() => {
        let newname = document.createElement('h5')
        let newnametext = document.createTextNode(`${data.label}`)
        newname.appendChild(newnametext)
        itemname.appendChild(newname)
            // let newimage = document.createElement('img')
    })





    // let newImage = document.createElement('img')
    // let iimage = document.createTextNode('')
    // itemimage.src = "https://www.edamam.com/web-img/f62/f62694eabd827755f6c9dcd1e6eb6fff"
    // itemname.innerHTML = item




    // data.hits.forEach((key) => {
    //     var ele = document.createElement("div");
    //     var img = document.createElement("img");
    //     img.setAttribute("src", data[key]);
    //     ele.appendChild(img);
    //     //append ele to parent div
    // });


    // itemrecipe.href=data.url
    // itemimage.src = `${data.image}`

    // itemimage = data.hits.image

    // itemimage.src = data.image
    // itemrecipe.innerHTML = data.url

    // data.forEach(image1 => {
    //     let newImage = document.createElement('img')
    //     let iimage = `${image1.image}`

    //     newImage.appendChild(iimage)
    //     itemimage.appendChild(newImage)
    // })



    data.hits.forEach(recipe => {
        console.log(recipe)
    })
}

button.addEventListener('click', (e) => {
    getdata(input.value)
})