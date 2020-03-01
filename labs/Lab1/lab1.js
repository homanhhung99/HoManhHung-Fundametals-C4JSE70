// //1
// let random = Math.random() * 1
// console.log(random.toPrecision(2))
// //2
// let arr = [2, 5, 6, 9, 10]
// let random = arr[Math.floor(Math.random() * arr.length)]
// console.log(random)
// //3
let question = [
    {
        question:"1+1 = ?",
        answer:[1,2,3,4],
        rightChoice:2,
    },
    {
        question:"2 + 1 = ?",
        answer:[1,2,3,4],
        rightChoice:3,
    },
    {
        question:"3+3 = ?",
        answer:[6,2,3,4],
        rightChoice:6,
    },
    {
        question:"3 + 4 = ?",
        answer:[1,2,7,4],
        rightChoice:7,
    },
]
let random = Math.floor(Math.random() * question.length)


let point = 0
while(question.length !=0)
{
    let random = Math.floor(Math.random() * question.length)
    let input = prompt(`${question[random].question}\nA:${question[random].answer[0]}\nB:${question[random].answer[1]}\nC:${question[random].answer[2]}\nD:${question[random].answer[3]}`)
        if(input == question[random].rightChoice)
        {
            point++
            alert("KHÔN VL")
            console.log(point)
        }
        else
        {
            alert("NGU VL")
        }
        
        question.splice(random,1)
        
        console.log("random",random)
        console.log(question.length)
}
console.log(`POINT: ${point}`)
