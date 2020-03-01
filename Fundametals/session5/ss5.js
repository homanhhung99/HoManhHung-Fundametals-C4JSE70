// function helloguy()
// {
//     console.log("Hello guy !!")
// }
// helloguy()

// function helloguy(name)
// {
//     console.log("Hello",name)
// }
// helloguy("Ho Hung")

// const helloguy = ()=>
// {
//     console.log("Hello fuckin shit")
// }
// helloguy()

// const calc = (arraynumber)=>{
//     let number = userIput.split(',')
//     let sum = 0
//     for(let i = 0; i < number.length;i++)
//     {
//         sum+= Number(number[i])
//     }
//     return sum
// }
// let userIput = prompt("Enter your number and sperate by commas")
// let value = calc(userIput)
// let resultDisplay = document.getElementById('sum')
// resultDisplay.innerText += value


// const feaking = ()=>
// {
let point = 0
function feaking(a,b,cal)
{
    let result
    if(cal== '-')
    {
        result = Number(a-b)
    }
    else if (cal=='+')
    {
        result = Number(a+b)
    }
    else if (cal == '*')
    {
        result = Number(a*b)
    }
    return result
}
function check(realSum,randomSum)
{
    let input = prompt("TRUE or FALSE ?")
    let check
    if(realSum == randomSum)
    {
        if(input == 'true')
    {
        check = true
    }
    else if(input == 'false')
    {
        check = false
    }
    }
    else
    {
        if(input == 'true')
    {
        check = false
    }
    else if(input == 'false')
    {
        check = true
    }
    }
    if(check==true)
    {
        point++
    }
    else
    {
        point--
    }
}
while(true)
{
    let a =  Math.floor(Math.random() * 10)
    let calculation = ['*','+','-']
    let b =  Math.floor(Math.random() * 10)
    let randomCalculation =  calculation[Math.floor(Math.random() * calculation.length)]
    let result = feaking(a,b,randomCalculation)
    let arrReesult=[result-2,result-1,result,result+1,result+2]
    let randomresult =  arrReesult[Math.floor(Math.random() * arrReesult.length)]
    console.log(`${a} ${randomCalculation} ${b} = ${randomresult}`)
    check(result,randomresult)
    console.log(`point: ${point}`)
}
    
// }