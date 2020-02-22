var fix = {
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done:'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect:'The formal word for ‘error’',
    pm:'The short version of Project Manager, the person in charge of the finalresult of a project',
    uiux:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
}
console.log(fix)
alert("Hi there, this is dev dictionary")
while(true)
{
    let input = prompt("Enter a keyword: ")
    if(input in fix)
    {
        alert(`${input}\n${fix[input]}`)
    }
    else
    {
        let choose
        alert("We could not find your word:"+ input)
        while(choose != 'y' || choose != 'n')
        {
            choose = prompt("Are you want add new key(y/n): ")
            if(choose == 'y')
            {
                let create = prompt("Leave your explanation")
                fix[input] = create
                alert("DONE")
                break
            }
            else if(choose == 'n')
            {
                alert("DONE")
                break
            }
            else
            {
                alert("ERROR!")
            }
        }
    }
}

