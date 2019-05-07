   var str='http://www.zhufeng.com/stu/?lx=1&name=AA&sex=man#teacher';
    var obj={};
           /* star=str.indexOf('?');
            last=str.indexOf('#');
            if(last>-1){
                str=str.slice(star+1,last);

            }
            else {
                str=str.slice(star+1);
            }

            ary=str.split("&");
           for(i=0;i<ary.length;i++)
           {
               item=0;
              item=ary[i].split("=")
               obj[item[0]]=item[1];
           }

            console.log(obj);
    */
  function queryurl(str) {
       var obj={};
       var link=document.createElement("a");
       link.href=str;
       var search=link.search.slice(1);
       var hash=link.hash.slice(1);
       hash?obj.HASH=hash:null;
       if(search){
           search=search.split("&");
           for (var i = 0; i < search.length; i++) {
               var item = search[i];
               item=item.split("=");
               obj[item[0]]=item[1];

           }
       }
       return obj;
    }

   console.log(queryurl(str));



