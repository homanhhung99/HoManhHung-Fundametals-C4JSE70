let input = prompt("Enter a sequence number: ")
let change = input.split(",")
let new1 = []
let j = 0
//1
for(let i = 0; i < change.length;i++)
{
    if(Number(change[i])%2!=0)
    {
        new1[j]=change[i]
        j++
    }
}
console.log(`1: ${change} => ${new1}`)
//2
let new2 = change.filter(change => change%2!=0)
console.log(`2: ${change} => ${new2}`)
