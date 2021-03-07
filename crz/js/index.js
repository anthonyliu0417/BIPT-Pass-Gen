function getCookie(cname) {
    var name = cname + "=";
    var ck = document.cookie;
    var ca = ck.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
}
var xingming=decodeURIComponent(getCookie("name"));
var dept=decodeURIComponent(getCookie("dept"));
var banji=decodeURIComponent(getCookie("banji"));
var num=getCookie("num");
var smon=getCookie("smon");
var sd=getCookie("sd");
var sh=getCookie("sh");
var smin=getCookie("smin");
var emon=getCookie("emon");
var ed=getCookie("ed");
var eh=getCookie("eh");
var emin=getCookie("emin");
var photo=getCookie("photo");
var upload=localStorage.getItem("photo");
document.getElementById("name").innerHTML=xingming;
document.getElementById("department").innerHTML=dept;
document.getElementById("class").innerHTML=banji;
document.getElementById("number").innerHTML=num;
document.getElementById("year0").innerHTML="2021";
document.getElementById("month0").innerHTML=smon;
document.getElementById("day0").innerHTML=sd;
document.getElementById("hour0").innerHTML=sh;
document.getElementById("minute0").innerHTML=smin;
document.getElementById("year1").innerHTML="2021";
document.getElementById("month1").innerHTML=emon;
document.getElementById("day1").innerHTML=ed;
document.getElementById("hour1").innerHTML=eh;
document.getElementById("minute1").innerHTML=emin;
document.getElementById("photo").src=photo;
if (upload){
    document.getElementById("photo").src=upload;
}