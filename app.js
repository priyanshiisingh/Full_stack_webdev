var heading = document.getElementById('heading')
var body = document.querySelector('body')

console.log(heading)

heading.innerHTML = "i was added by js "
heading.style = "color:red; fontsize:5rem;"
console.log(heading.classList) //shows all the class heading has

heading.classList.add('five')
heading.classList.remove('one')

console.log(heading.classList)

body.classList.add('dark') //dark mode on
body.classList.remove('dark'); //dark mode off