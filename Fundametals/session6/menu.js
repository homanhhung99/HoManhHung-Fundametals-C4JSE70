let Menu = document.getElementById('menu')
let input = document.getElementById('inputtext')
let buttom = document.getElementById('nut')
let buttomDe = document.getElementById('xoa')
let create = document.createElement('li')
buttom.addEventListener('click',(e)=>{
    // console.log(e)
    console.dir(input)
    Menu.innerHTML += `<option>${input.value}</option>`
    // create.innerText = input.value
    // Menu.appendChild(create)
})
buttomDe.addEventListener('click',()=>{
    console.dir(Menu)
    if(input.value == '')
    {
        Menu.removeChild(Menu.lastElementChild)
    }
    else
    {
        let check = true
        for(let i = 0;i<Menu.children.length;i++)
        {
            if(input.value.toLowerCase()==Menu.children[i].innerText.toLowerCase()){
                Menu.children[i].remove()
                check = false
            }
        }
        if(check)
        {
            alert("Don't have that meat")
        }
    }
})