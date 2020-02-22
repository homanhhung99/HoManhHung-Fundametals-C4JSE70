var dev_front =[
    {
        language:'HTML',
        complete:false,
    },
    {
        language:'CSS',
        complete:false,
    },
    {
        language:'Basics of javaScript',
        complete:false,
    },
    {
        language:'Node package manager (npm)',
        complete:false,
    },
    {
        language:'Git',
        complete:false,
    },
]
let keys = Object.keys(dev_front[0])
console.log(keys)
console.log("Hi there~ this is your learning task front-end developer carrer")
dev_front.forEach((value,index)=>{
    console.log(`${index+=1}. ${value.language}\nComplete: ${value.complete}`)
})
let input = prompt("Enter your command(New, delete,Update,Complete)")
if(input == 'new')
{
    let name = prompt("Enter new task:")
    let create = {
        language:name,
        complete:false,
    }
    dev_front.push(create)
    dev_front.forEach((value,index)=>{
        console.log(`\n${index+=1}. ${value.language}\nComplete: ${value.complete}`)
    })
}
else if(input == 'update')
{
    let position = Number(prompt("Enter position"))
    dev_front[position-1].language = prompt("Enter new title")
    dev_front.forEach((value,index)=>{
        console.log(`\n${index+=1}. ${value.language}\nComplete: ${value.complete}`)
    })
}
else if(input == 'complete')
{
    let complete = Number(prompt("Enter position"))
    dev_front[complete-1].complete = true
    dev_front.forEach((value,index)=>{
        console.log(`\n${index+=1}. ${value.language}\nComplete: ${value.complete}`)
    })
}
else if(input == 'delete')
{
    let deletes = prompt("Enter delete")
    dev_front.splice(deletes-1,1)
    dev_front.forEach((value,index)=>{
        console.log(`\n${index+=1}. ${value.language}\nComplete: ${value.complete}`)
    })
}
else
{
    alert('Error!!')
}
let x = 'x'
dev_front.forEach((value,index)=>{
    if(value.complete == true)
    {
        console.log(`\n${index+=1}.[${x}]${value.language}`)
    }
    else
    {
        console.log(`\n${index+=1}.[ ]${value.language}`)
    }
})