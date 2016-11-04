
//显示时间
var today = new Date();
var my1 = today.getFullYear();
var my2 = today.getMonth();
var my3 = today.getDay();			
var weekend =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
document.write(my1+"年"+my2+"月"+my3+"日"+weekend[today.getDay()]);