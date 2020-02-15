#1
clear()
let k = 0
for(i = 0;i<4;i++)
{
rt(k)
lt(30)
fd(100)
rt(60)
fd(100)
home()
rt(k)
rt(30)
fd(100)
lt(60)
fd(100)
home()
k = k +90
}
#2
clear()
for(i = 0; i< 3;i++)
{
  lt(30)
  fd(100)
  rt(60)
  fd(100)
  rt(90)
}
for(j = 0 ; j<2;j++)
{
  lt(18)
  fd(100)
  rt(72)
  fd(100)
  rt(90)
}
home()
for(k = 0;k<4;k++)
{
  fd(100)
  rt(90)
}
home()
let h = 30
for(m = 0;m<2;m++)
{
  rt(h)
  fd(100)
  h = h+90
}
home()