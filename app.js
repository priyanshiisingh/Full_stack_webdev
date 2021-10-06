const tab = document.querySelector('table')

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello world")
//     }, 3000);
// }).then((data) => {
//     console.log(data)
// })

let response = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    let parseddata = res.json()
    return (parseddata)
}).then((data) => {
    console.log(data)
    data.forEach((user) => {
        let newrow = document.createElement('tr')
        let template = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>`
        newrow.innerHTML = template
        tab.appendChild(newrow)
    })
})


// })

// let dataid = document.createElement('td')
//         let dataidtextnode = document.createTextNode(user.id)
//         dataid.appendChild(dataidtextnode)
//         newrow.appendChild(dataid)
//         tab.appendChild(newrow)
// append_data=(element) => {
//     const element = document.createElement('li')
//     userdetail=element['name'] + element['username']
//     const textnode = document.createTextNode(userdetail)
//     element.appendChild(textnode)
//     console.log(element)
//     list.appendChild(element)
// }
// console.log(arr)




// const element = document.createElement('li')
//     const textnode = document.createTextNode(data)
//     element.appendChild(textnode)
//     console.log(element)
//     list.appendChild(element)