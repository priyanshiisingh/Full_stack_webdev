var dlbutton = document.querySelector('.dl_btn')
var body = document.querySelector('body')

console.log(dlbutton)
const callbackfuntion = (() => {

    body.classList.toggle('dark')

})

// dlbutton.addEventListener("click", callbackfuntion)
dlbutton.addEventListener('click', callbackfuntion)