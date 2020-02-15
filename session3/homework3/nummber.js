let input = []
let sum = 0
input = Number(prompt("Enter a squence of Number, separated by commas: "))
alert(input)
for(let i = 0; i< input.length;i++)
{
    console.log(input[i])
    sum = sum + input[i]
}
console.log(sum)
