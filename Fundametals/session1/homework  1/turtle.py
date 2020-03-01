# A square
clear()
setshape("turtle")
for(i = 0; i< 4;i++)
{
 	fd(100)
	rt (90)
}
# An equilateral triangle
clear()
setshape("turtle")
lt(30)
fd(100)
home()
lt(90)
fd(100)
rt(120)
fd(100)
# circle
clear()
setshape("car")
 for(j = 0; j<360;j++)
	{
 	 rt(1)
 	 fd(1)
	}
# Multi-circles
clear()
setshape("car")
rt(90)
for(i = 0;i<6;i++)
{
  for(j = 0; j<360;j++)
	{
 	 rt(1)
 	 fd(1)
	}
  rt(60)
}
# Or even better:
clear()
setshape("car")
rt(90)
for(i = 0;i<45;i++)
{
  for(j = 0; j<360;j++)
	{
 	 rt(1)
 	 fd(1)
	}
  rt(10)
}



