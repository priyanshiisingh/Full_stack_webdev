const dlbutton = document.querySelector('.dl_btn')
const body = document.querySelector('body')
const input = document.querySelector('input')
const inputbutton = document.querySelector('.addtask_btn')
const parent = document.querySelector('.list_items')
const gparent = document.querySelector('.forscroll')

//dark light mode toggling
const dlbutton_callbackfuntion = (() => {
    body.classList.toggle('dark')
})
dlbutton.addEventListener('click', dlbutton_callbackfuntion)

//input into list
iteminput = input.value
const inputbutton_callback = (iteminput) => {
    const template = `
                <div class="checkbutton">
                    <i class="fa fa-check-circle"></i>
                </div>
                <div class="item">
                    <ul>
                        <li>${input.value}</li>
                    </ul>
                </div>
                <div class="list_tools">
                    <i class="fa fa-times"></i>
                    <i class="fas fa-bars"></i>
                </div>
                `
    const newitem = document.createElement('div')
    newitem.setAttribute('class', 'items')
    newitem.innerHTML = template
    console.log(newitem)
    newi = parent.appendChild(newitem)
    gparent.appendChild(newi)
}

inputbutton.addEventListener('click', (e) => {
    inputbutton_callback(input.value)
})