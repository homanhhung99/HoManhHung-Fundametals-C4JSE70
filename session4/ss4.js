//ICRUD
//Initial
let person = {
    name: 'Ho Hung',
    age:20,
    job:'student',
    location:'Hanoi',
    status: 'Single',
    ex:3,
}
console.log(person)
//Read
console.log(person.name)
//Update
person.status = 'in relationship with code'
console.log(person)
//Create
person.hobby = 'play girl'
console.log(person)
//Delete
delete person.ex
console.log(person)
//cách 1
let game = {
    lol:' League of Legends',
    aoe:'Age of Empires',
    jav:'japan and vision', 
}
let input
let Create
let j = 0
for(let i = 0;i< Object.keys(game).length;i++)
{
    console.log(j++ +": " + Object.keys(game)[i])
}
while(true)
{
    input = prompt("Nhập từ mà muốn nhập: ")
    if(game.hasOwnProperty(input) == true)
    {
        console.log(game[input])
    }
    else
    {
        Create = prompt("Mày muốn thêm từ này vào từ điển không(Y or N) ")
        if(Create == 'y')
        {
            game[input] = prompt("Ý nghĩa của nó là cái j thế cu: ")
            for(let i = 0;i< Object.keys(game).length;i++)
            {
                console.log(j++ +": " + Object.keys(game)[i])
            }
        }
        else if(Create == 'n')
        {
            console.log("Dẹp mẹ đê")
        }
        else
        {
            alert('Error!')
        }
    }
}

//cách 2
let dictionary = {
    bff: 'bfasd',
    bf:'cạc'
}
let keys = Object.keys(dictionary)
keys.forEach((value, index) =>{
    console.log(`${index+1}.${value}`)
})
let userinput = prompt("NHập đi con zai")
if(userinput in dictionary)
{
    console.log(dictionary[userinput])
}
else
{
    let Createnew = prompt("muon nhap tu này vao ko")
    if(Createnew == 'y')
    {
        keys = Object.keys(dictionary)
        keys.forEach((value, index) =>{
            console.log(`${index+1}.${value}`)
        })
    }
    else if(Createnew == 'n')
    {
        console.log("thank you")
    }
    else
    {
        alert('Error !')
    }
}




