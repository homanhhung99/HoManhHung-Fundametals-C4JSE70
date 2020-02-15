// let ramdom = Math.floor(Math.random() * 100);
// console.log(ramdom)
// let put
// do
// {
//     put = Number(prompt("NHẬP: "))
//     if(ramdom < put)
//     {
//         console.log("Too Big")  
//     }
//     else if (ramdom >  put )
//     {
//         console.log("Too small")
//     }
//     else if(ramdom == put )
//     {
//         console.log("Bigo")
//         break
//     }
// }while(true)

let input = Number(prompt("NHAP VAO DI CON ZAI: "))
if (input < 2)
{
    console.log("Không phải số nguyên tố Nhé con zai")
}
let i = 0
let j 
for(j = 2 ; j <= Math.sqrt(input); j++)
{
    console.log("số j :"+j)
    if(input % j == 0)
    {
        i++
        console.log("số i : "+ i)
    }
}
console.log(i)
if(i ==0)
{
    console.log("Là số nguyên tố: " + input)
}
else
{
    console.log("Không là số nguyên tố: "+ input)
}