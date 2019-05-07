        var oDiv=document.getElementById("box");
        var link=document.getElementById("link");

        oDiv.innerHTML=changeCode();
        link.onclick=function () {
            oDiv.innerHTML=changeCode();
        }


 function changeCode() {
        var n=null;
        var result='';
        var codeArea="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
        while(result.length<4){
                n=Math.round(Math.random()*codeArea.length-1);
                char=codeArea.charAt(n);
                if(result.indexOf( char)===-1)
                {
                    result+= char;
                }
        }
     /*for (var i = 0; i < 4; i++) {
         n= Math.round(Math.random() * codeArea.length);
         if(result.indexOf(codeArea[n])>-1) {
             i--;
             continue; //生成四位不重复的验证码
         }
            else {
             result += codeArea[n];
         }
     }*/
        return result;
     }



