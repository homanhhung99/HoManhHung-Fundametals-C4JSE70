clear()
const circle = {
shape: 'circle',
x: 100,
y: 50,
radius: 30,
};
setshape("rocket-large")
penup()
rt(90)
fd(circle.x)
lt(90)
fd(circle.y)
pendown()
let pi = 3.1415
for(let i = 0;i<360;i++)
{
  rt(1)
  fd(2*pi*circle.radius/360)
}
