var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
var tags = document.getElementsByTagName('a')
var qs = document.querySelector('#heading')
var qs2 = document.querySelector('.para')

console.log(heading)
console.log(para[0])
console.log(para[1])
console.log(para.length)
console.log(para)

//para.push("hello") wont work

//getelementbyid returns single object whereas getelementsbyclassname 
//returns all collection of all the objects of the specified class