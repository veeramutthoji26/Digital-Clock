
function showtime(params) {
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var d=date.getDate();
    var m=date.getMonth();
    var y=date.getFullYear();

h=h < 10 ? "0" + h : h ;
m=m < 10 ? "0" + m : m ;
s=s < 10 ? "0" + s : s ;
var time = h+":"+m+":"+s
var date = d+m+y
document.querySelector("#myclockdisplay").innerHTML=time;
document.querySelector("#mydatedisplay").innerHTML=date;
setTimeout(showtime,1000);

}
showtime();
