clear()
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]
let pi = 3.1415
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
else if(value.shape=='circle')
  {
    penup()
    rt(90)
    fd(value.x)
    lt(90)
    fd(value.y)
    fd(value.radius)
    pendown()
    rt(90)
    for(let i = 0;i<360;i++)
    {
      rt(1)
      fd(2*pi*value.radius/360)
    }
  }
  home()
})