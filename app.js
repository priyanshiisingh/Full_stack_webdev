// let response = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
//     let parseddata = res.json()
//     return (parseddata)
// }).then((data) => {
//     console.log(data)
//     data.forEach(user => {
//         console.log(data)
//     })
// })

//Async Await

// const response = await fetch('https://jsonplaceholder.typicode.com/users')

// const data = await response.json()

// console.log(data)

//output: error


const fetchdata = (async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data = await response.json()
    console.log(data)
})

fetchdata()