var dlbutton = document.querySelector('.dl_btn')
var body = document.querySelector('body')

console.log(dlbutton)
const dlbutton_callbackfuntion = (() => {

    body.classList.toggle('dark')

})

dlbutton.addEventListener('click', dlbutton_callbackfuntion)