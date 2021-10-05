// let response = fetch('https://jsonplaceholder.typicode.com/users').then(data => {
//         console.log(data)
//     })
//data is not a keyword

let response = fetch('https://jsonplaceholder.typicode.com/users').then(data => {
    let parseddata = data.json()
    console.log(parseddata)
    return parseddata
}).then(res => { console.log(res) })

// then alays returns a promise, .then only runs once promise is fulfilled
//

// let response = fetch('https://jsonplaceholder.typicode.com/users ')

// console.log(response)

//returns us a promise 

// let data = fetch('https://jsonplaceholder.typicode.com/users')
// setTimeout(() => {
//     console.log(data)
// }, 2000);
// console.log(data)

//output promise{<fulfilled>:response}

//to conevert a stream into response data 

// setTimeout(() => {
//     console.log(response)
//     const data = response.json //json function converts stream into data
//     console.log(data)

// }, 2000);

// setTimeout(() => {
//     const data = response
//     console.log(data)
//     console.log(data.json())
// }, 2000);