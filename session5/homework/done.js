//1
function hello()
{
    for(let i = 0; i < 3;i++)
    {
        console.log("Hello world")
    }
}
hello()
//2
const Sum = (a,b) =>
{
    console.log(`SUM: ${Number(a+b)}`)
}
Sum(1,2)
//3
function drawSquare(length, newColor)
{
    for(let i = 0; i < 4;i++)
    {
        color(newColor)
        fd(length)
        rt(90)
    }
}
drawSquare(100,'blue')
//4
clear()
function drawSquare(length, newColor)
{
    for(let i = 0; i < 4;i++)
    {
        color(newColor)
        fd(length)
        rt(90)
    }
}
for(let j = 0;j<30;j++)
{
    drawSquare(j*5,'red')
    lt(17)
    penup()
    fd(j*2)
    pendown()
}
//5
clear()
function draw_star(length)
{
    rt(18)
    for (let i = 0; i < 5; i++) 
    {
            fd(length)
            rt(144)
        }
}
draw_star(100)
//6-7
function remove_dollar_sign(remove)
{
    return remove.replace(/[$]/g, '')
}
let string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
console.log(string_with_no_dollars)
if (string_with_no_dollars == "80% percent of life is to show up"){
   console.log("Your function is correct")}
else{
   console.log("Oops, there's a bug")}
//8
function get_even_list(parameter)
{
    let x = []
    for(let i = 0; i < parameter.length;i++)
    {
        if(parameter[i]%2==0)
        {
            x.push(parameter[i])
        }
    }
    return x
}
let even_list = get_even_list([1, 2, 5, 9, -10, 6])
console.log(even_list)
if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
  console.log("Your function is correct")
}
else{
   console.log("Ooops, bugs detected")
}
// 10-11
function is_inside(x,y)
{
    if(x[0] >= y[0] && x[0]<= y[0]+y[3] && x[1] >= y[1] && x[1]<= y[1]+y[2])
    {
        return true
    }
    else
    {
        return false
    }
}
if ( is_inside([200, 120], [140, 60, 100, 200])==true){
   console.log("Your function is correct")}
else{
   console.log("Oops, there's a bug")}

