clear()
setshape("rocket-large")
let fixed = 120
const colors = ['red','gray','blue','purple','cyan']
for(let i = 0;i < colors.length;i++)
{
  color(colors[i])
  for(let j = 0;j<4;j++)
  {
    fd(fixed)
    rt(90)
  }
  fixed-=25
}