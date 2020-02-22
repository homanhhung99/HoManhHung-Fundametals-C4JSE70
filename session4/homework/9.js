clear()
const rect = {
x: 200,
y: 50,
width: 20,
height: 40,
}
setshape("rocket-large")
penup()
rt(90)
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for(let i = 0;i<4;i++)
{
  if(i==0 ||i==2)
  {
    fd(rect.height)
 	 rt(90)
  }
  else
  {
    fd(rect.width)
 	 rt(90)
  }
}