let input = prompt("Enter a sequence of names: ")
let change = input.split(",")
let newarray = []
//1
for(let i = 0; i < change.length;i++)
{
    newarray[i]='<'+change[i]+'>'
}
console.log("1: "+change+" => "+newarray)
//2
let changenew = change.map(change=>'<'+change+'>')
console.log("2: "+change+" => "+changenew)
