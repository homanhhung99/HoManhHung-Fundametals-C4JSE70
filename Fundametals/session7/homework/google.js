let color = document.getElementById('colorx')
let input = document.getElementById('demoinput')
let buttom = document.getElementById('btndemo')
let deleteE = document.getElementById('deleteX')
let linkS = document.getElementById('demoa')
buttom.addEventListener('click',(e)=>{
    console.dir(linkS)
    console.dir(input)
    input.value = linkS.href
})
function myFunction() {
    console.dir(color)
    color.remove(color.selectedIndex);
  }
