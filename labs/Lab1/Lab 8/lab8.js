let container = document.getElementById('container')
let cong = document.getElementById('cong')
let tru = document.getElementById('tru')
let x = 0
container.innerHTML = `${x}`
cong.addEventListener('click',()=>
{
    x++
    console.dir(container)
    container.innerHTML = `${x}`

    container.style.color = "blue"
})
tru.addEventListener('click',()=>
{
    x--
    console.dir(container)
    container.innerHTML = `${x}`
    container.style.color = "red"
})