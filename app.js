// setTimeout(() => {
//     console.log('timer1')
// }, 0);


// for (var i = 0; i < 1000; i++) {
//     console.log(i)
// }

//PROMISES

let value = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello')
    }, 4000);
})

console.log(value)

setTimeout(() => {
    console.log(value)
}, 4000);