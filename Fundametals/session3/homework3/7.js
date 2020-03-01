//7
let input
let i
const arr = [3, 4, 6, -9, 10, -88, 2]
while (true) {
    input = Number(prompt("Enter a number:  "))
    for(i = 0;i<arr.length;i++)
    {
        if(input == arr[i])
        {
            alert(`${input} is FOUND in my array at index ${i}`)
            break
        }
    }
    if(input != arr[i])
     alert(`${input} is not found in my array`)
}
