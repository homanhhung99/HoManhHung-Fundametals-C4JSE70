// for(let i = 0 ; i < 5;i++)
// {
//     console.log(i)
// }
// let numberuser = Number(prompt("Nhập số đi cu: "))
// let sum = 0
// for(let i = 0; i < numberuser +1 ; i++)
// {
//     sum = sum + i
// }
// console.log(sum)

// let i = 5;
// if( i <= 5)
// {
//     console.log("baby")
// }else if(i < 10)
// {
//     console.log("nhi đồng")
// }

let name = "Hùng"
if(name === "Tùng" || name === "Hùng")
{
    console.log(name,"đẹp zai")
}
Cách 1:
let user1 = "c4e70"
let pass1 = "codethechange"
let i = 0
do
{
    let user = prompt("User: ")
    let pass = prompt("Pass:")
    if(user === user1 && pass === pass1 )
    {
     console.log("Welcome to the wonderland")
     break
    }
    else 
    {
        i++
         console.log("Đăng nhập sai, welcome to the hell")
         if(i == 3)
         {
           console.log("BẠN NGU VL")
         }
    }
    
}while(i < 3)
// Cách 2:
// user1 = 'c4e70'
// pass1 = 'codethechange'
// let i = 0
// let loop = true
// while (i<3)
// {
//     let user = prompt("User: ")
//     let pass = prompt("Pass:")
//     if(user === user1 && pass === pass1 )
//     {
//      console.log("Welcome to the wonderland")
//      loop = false
//     }
//     else 
//     {
//      console.log("Đăng nhập sai, welcome to the hell")
//      i++
//      if(i==3)
//      {
//          console.log("Não cá vàng vãi đái")
//         loop = false
//      }
      
//     }
// }
