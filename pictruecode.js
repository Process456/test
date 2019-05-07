 var Pic=document.getElementById("image");
var oLink=document.getElementById("link");
    function changePic() {
        var n=Math.round(Math.random()*10+1);
        return n;
    }

        Pic.src="images/验证码"+changePic()+".jpg";
    oLink.onclick=function () {
        Pic.src="images/验证码"+changePic()+".jpg";
    }