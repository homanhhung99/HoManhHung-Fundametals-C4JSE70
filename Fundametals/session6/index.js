// //DOM
// //read
// let h = document.getElementById('hello')
// console.log(h)
// console.dir(h)
// console.log(h.innerText)

// h.innerText = 'Hello Hung'
// //remove
// h.remove()
let NameDiv = document.getElementById('hello')
let NameP = document.createElement('p')
NameP.innerText = 'anh em ta là cái con j'

NameDiv.appendChild(NameP)//Xuất ra Html ở tại thẻ p
console.log(NameP)

NameDiv.innerHTML += '<p>Lớp mình toàn dân chơi</p>'//xuất ra html ko biết thẻ

let nameButton = document.getElementById('nut')
nameButton.addEventListener('click',()=>{
    alert("I FUCK YOU")
})