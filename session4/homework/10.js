clear()
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]
setshape("rocket-large")
cmds.forEach((value,index)=>{
if(value.shape=='square'){
penup()
rt(90)
fd(value.x)
lt(90)
fd(value.y)
pendown()
for(let i = 0; i< 4;i++)
{
    fd(value.width)
    rt(90)
}
 }
  else if(value.shape=='rect'){
penup()
rt(90)
fd(value.x)
lt(90)
fd(value.y)
pendown()
fd(value.height)
rt(90)
fd(value.width)
rt(90)
fd(value.height)
rt(90)
fd(value.width)
  }
  home()
})