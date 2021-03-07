var queren=confirm("声明：\n点击“确定”并继续使用代表您已阅读并同意以下内容\n1. 本项目仅供学习和研究web及网络知识使用，请勿将其用于任何非法用途否则后果自负，本站不承担一切责任。\n2. 源代码以MIT License于GitHub开源，有兴趣的话可以点击页面上方的GitHub链接进入我的Repositories查看。\n3. 由于本人技术水平还有待提高，如果大家有发现不规范的地方或者bug请在github中提交issue一起交流进步，感谢大家理解和帮助。\n4. 本工具一切操作全部通过JavaScript完成，所有数据均在前端由浏览器处理，后端服务器不储存不处理任何信息。\n5. 页面间的数据传递是通过Cookies完成的，如果浏览器没有打开Cookies则信息可能不会被正确显示出来。\n6. 由于Cookies大小被限制在4k，所以照片使用了sessionstorage实现传递，大小限制各浏览器不同基本在5M左右，如果你需要自定义照片，请确认手机浏览器内核支持sessionstorage，否则照片可能不会被正确显示。如果不支持请通过升级系统解决或使用默认头像。\n7. 只要浏览器或微信不关闭，cookies就不会被清除，所以如果微信或者浏览器一直在后台没关，就可以随时打开xdgclub.com/crzsl查看上一次生成的页面，直到下一次生成将它覆盖。\n最后，运营网站不易，购买域名及服务器都需要资金，如果您觉得本站内容有帮助的话欢迎通过页面下方二维码进行捐助，谢谢。");
if (queren==false){
    window.location.href="https://xdgclub.com";
}
document.getElementById("btn").onclick=function(){
    localStorage.removeItem("photo");
    var name=document.getElementById("name").value;
    var sex=document.getElementsByName("sex");
    var dept=document.getElementById("department").value;
    var banji=document.getElementById("class").value;
    var num=document.getElementById("number").value;
    var smon=document.getElementById("startmonth").value;
    var sd=document.getElementById("startday").value;
    var sh=document.getElementById("starthour").value;
    var smin=document.getElementById("startmin").value;
    var emon=document.getElementById("endmonth").value;
    var ed=document.getElementById("endday").value;
    var eh=document.getElementById("endhour").value;
    var emin=document.getElementById("endmin").value;
    var photo=document.getElementById("photo").files[0];
    var pic;
    if (photo){
        var file=new FileReader();
        file.readAsDataURL(photo);
        file.onload=function(){
            var dataurl=file.result;
            localStorage.setItem("photo",dataurl);
        }
    }
    else{
        if (sex[0].checked){
            var boypic=new Image();
            boypic.src="https://xdgclub.com/resources/boys.jpg";
            pic=boypic.src;
        }
        if (sex[1].checked){
            var girlpic=new Image();
            girlpic.src="https://xdgclub.com/resources/girls.jpg";
            pic=girlpic.src;
        }
    }    
    document.cookie="name="+encodeURIComponent(name)+";path=crz/";
    document.cookie="dept="+encodeURIComponent(dept)+";path=crz/";
    document.cookie="banji="+encodeURIComponent(banji)+";path=crz/";
    document.cookie="num="+num+";path=crz/";
    document.cookie="photo="+pic+";path=crz/";
    document.cookie="smon="+smon+";path=crz/";
    document.cookie="sd="+sd+";path=crz/";
    document.cookie="sh="+sh+";path=crz/";
    document.cookie="smin="+smin+";path=crz/";
    document.cookie="emon="+emon+";path=crz/";
    document.cookie="ed="+ed+";path=crz/";
    document.cookie="eh="+eh+";path=crz/";
    document.cookie="emin="+emin+";path=crz/";
    window.open("crz/index.html");
}