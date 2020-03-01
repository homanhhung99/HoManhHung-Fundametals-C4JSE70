let input = prompt("Enter a squence of Number , separated by ',': ")
let s = input.split(",")
console.log(s)
let min = s[0]
for(let i = 1; i < s.length;i++)
{
    if(min > s[i])
    {
        min = s[i]
    }
}
console.log(`The smaller number is ${min}`)