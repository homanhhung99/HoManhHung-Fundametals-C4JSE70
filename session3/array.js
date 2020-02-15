//Initial
let iteams = ["Cat","camel"]
console.log(iteams)
//create
iteams.push("fox")
console.log(iteams)
//read
console.log(iteams[2])
//Read all array
for( let i = 0; i< iteams.length ;i++)
{
    console.log(iteams[i])
}

// iteams.forEach((value,index)=>{
//     console.log(`${index}${value}`)
// })

//Update
iteams[2] = 'elephant'
console.log(iteams)
//Seach index
let i = iteams.indexOf('Cat')
console.log(i)
//delete
iteams.splice(1,2)
console.log(iteams)