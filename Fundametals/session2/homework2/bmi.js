//program that asks user their height (cm) and weight (kg), and then calculate their BMI (Body Mass Index):
let height 
let weight
let i = 0
do
{
    height = Number(prompt("Write your height (Cm): "))
    weight = Number(prompt("Write your weight (Kg): "))
    if(height < 0 || weight  < 0)
    {
        console.log("Error: Invalid input! Please enter again ! ")
        i++
        if(i==3)
        {
            console.log("GET OUT WEBSITE WAYNOW ! YOU ARE VERY STUPID !! ")
            break
        }
    }
    else
    {
        console.log("Your height "+height/100 + " m")
        console.log("Your weight "+weight+" kg")
        let heightm = height/100
        let bmi = weight/(heightm*heightm)
        console.log("BMI = "+ bmi)
        if(bmi < 16)
        {
            console.log("Severely underweight")
        }
        else if(bmi < 18.5)
        {
            console.log("Underweight")
        }
        else if(bmi < 25)
        {
            console.log("Normal")
        }
        else if(bmi < 30)
        {
            console.log("Overweight")
        }
        else 
        {
            console.log("Obese")
        }
     }
}while(height < 0 || weight < 0)
//program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)
let value = Number(prompt("Write value n : "))
let n = 1
for(let i = 1 ; i <= value;i++)
{
    n = n*i
}
console.log(value+"!= "+n)
