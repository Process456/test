var ary=[2,2,2,2,2,2,2,2,2,2,2,2,2,2];
var obj={};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    //键值对方法
    if(typeof obj[item]==="undefined")
    {
        obj[item]=item;
    }
    else {
        item = ary[ary.length-1];
        ary.length--;
        i--;
       // ary.splice(i,1);
        //i--;
    }



   // ------------------------------------------------------------
      //  循环嵌套
    /* for ( j =i+1; j <ary.length; j++) {
             if(item===ary[j]){
                 ary.splice(j,1);
                 j--;

             }

     } */

}
 console.log(ary);