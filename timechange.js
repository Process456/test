       function addZero(n) {
           return  n<10?'0'+n:n;
       }

        var time="2018-4-4 16:52:23";
        ary=time.split(" ");
        aryleft=ary[0].split("-");
        aryright=ary[1].split(":");
        year=aryleft[0];
        month=addZero(aryleft[1]);
        day=addZero(aryleft[2]);
        hours=addZero(aryright[0]);
        minute=addZero(aryright[1]);
        second=addZero(aryright[2]);
       result=year+'年'+month+'月'+day+'日 '+hours+'时'+minute+'分'+second+'秒';
       console.log(result);



