      var oBox=document.getElementById("boxOne");
      var tabList=oBox.getElementsByTagName("li");
      var tabDiv=oBox.getElementsByTagName("div");
      var lastIndex=0;
       for (var i=0; i<tabList.length; i++) {
           tabList[i].index=i;
           tabList[i].onmouseover=function () {475
               //changeTab(this.index);
    //--------------------------------------------------------------
              tabList[lastIndex].className='';//清除最后一个点击的li
               tabDiv[lastIndex].className='';//清除最后一个显示出div
               this.className="activeLi";
               tabDiv[this.index].className="activeDiv";
               lastIndex=this.index; //把最后一次点击的li的索引赋值给lastIndex*/
     // --------------------------------------------------------------
               /*  for(var j=0;j<tabList.length;j++){
                 tabList[j].className=""; // tabList[j].className=tabDiv[j].className="";
                  tabDiv[j].className="";
          }
              this.className="activeLi";
              tabDiv[this.index].className="activeDiv";*/
               //-----------------------------------------------------------
              // changeTabs(this);  //点谁选谁
           }

       }

    function changeTab(n) {
        for(var j=0;j<tabList.length;j++){
            tabList[j].className='';
            tabDiv[j].className='';
        }
        tabList[n].className="activeLi";
        tabDiv[n].className="activeDiv";
    }
       function changeTabs(ele) {
           for (var j = 0; j < tabList.length; j++) {
                if(tabList[j]===ele){
                        ele.className="activeLi";
                        tabDiv[j].className="activeDiv";
                        continue;
                }
                else{
                    tabList[j].className='';
                    tabDiv[j].className='';
                }

           }
       }