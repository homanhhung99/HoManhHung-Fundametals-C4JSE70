let input = prompt("Enter a squence of Number , separated by commas(,): ")
let s = input.split(",")
console.log(s)
let sum = 0
for(let i = 0; i < s.length;i++)
{
    sum+=Number(s[i]
}
console.log(`The sum of them is ${sum}`)