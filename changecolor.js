  var oBox=document.getElementById("box");
     // var Box=getComputedStyle(oBox,null).height;
     // var Box1=oBox.currentStyle.
  //oBox.style.cssText="width:300px; font-size:30px"; ie获取css
  var oBli=oBox.getElementsByTagName("li");
  for(var i=0 ;i<oBli.length; i++)//JS实现三行变色功能
  {
       /*------------------------------------------------------------------
       switch (i % 3) {                 //       使用switch进行三行变色
          case 0:
              oBli[i].style.background = "red";
              break;
          case 1:
              oBli[i].style.background = "green";
              break;
          case 2:
              oBli[i].style.background = "yellow";
              break;
      }
      */
       /* ---------------------------------------------------------------------------
       var arry=['classRed','classGreen','classYellow']   //用数组找规律进行三行变色
           oBli[i].className=arry[i%3];
           */

                oBli[i].className='bg'+(i%3);//使用类名实现三行变色更简单

      oBli[i].onmouseover=function () {
         // this.id= 'hover';  利用id记性变换样式
          //--------------------------------------------------------------------------
          //this.myColor=this.style.background; //利用行内样式改变鼠标移入移出的样式
         // this.style.background="lightcoral";
          this.className+=' hover';

      }
      oBli[i].onmouseout=function () {
          //this.id= ''; 利用id记性变换样式
          //-------------------------------------------------------------------------
          // this.style.background=this.myColor;
          this.className=this.className.replace(" hover","");
          //使用replace函数来减去class类名中的hover

      }


  }

