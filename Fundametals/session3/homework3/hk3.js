let menu = ['Jeans','T-Shirt','Socks']
let input
while (true) {
    input = prompt("Hi there !Welcome to shop admin panel, what do you want(C,R,U,D):")
    if(input == 'r')
    {
        console.log("The current items are: ")
         for(let i = 0; i < menu.length;i++)
         {
             console.log(i+1+": "+menu[i])
         }
    }
    else if(input == 'c')
    {
       menu.push(prompt("Enter the name of new item: "))
       alert("DONE")
    }
    else if (input == 'u')
    {
        let seach = Number(prompt("Enter the position you want update: "))
        seach--
        menu[seach] = prompt("Enter the new name !")
        alert("DONE")
    }
    else if (input == 'd')
    {
        let deleteItem = Number(prompt("Enter the position you want delete: "))
        deleteItem--
        menu.splice(deleteItem,deleteItem+1)
        alert("DONE")
    }
    else
    {
        console.log("This command is not supported !")
    }
}

