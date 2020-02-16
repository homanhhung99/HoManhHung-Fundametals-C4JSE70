let lamb = [5,7,300,90,24,50,75]
console.log("Hello!, My name is Hung and here is my sheep sizes: "+lamb)
for(let j = 1;j<=3;j++)
{
    console.log("Now my biggest sheep has size: "+ Math.max.apply(Math,lamb)+", let's shave it")
    let seach = lamb.indexOf(Math.max.apply(Math,lamb))
    lamb[seach]=8
    console.log("After shearing, here is my flock: "+lamb)
    for(let i = 0;i<lamb.length;i++)
    {
        lamb[i]+=50
    }
    console.log("MONTH "+j+"\nOne month has, passed, my sheeps have grown, here are their sizes: "+lamb)
}
let sum = 0
for(let k = 0;k<lamb.length;k++)
{
    sum+=Number(lamb[k])
}
console.log(`My flock has size in total: ${sum}`)
console.log(`I would get ${sum} * 2$ = ${sum*2}`)
