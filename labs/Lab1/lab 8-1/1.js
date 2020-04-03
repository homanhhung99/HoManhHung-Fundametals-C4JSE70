let start = document.getElementById('batdau')
let stop = document.getElementById('dung')
let displayseconds = document.getElementById('seconds')
let input = document.getElementById('nhap')
var t
var timer_is_on = 0
let c 
function timedCount() {
  c--
  if(c!=0)
  {
    displayseconds.innerHTML = c
    t = setTimeout(timedCount,1000)
  }
  else
  {
    displayseconds.innerHTML = "Hết thời Gian"
  }
}
function startCount() {
     c = input.value
    if (!timer_is_on) {
      timer_is_on = 1;
      timedCount();
    }
  }
function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}