/**
 * Created by lhp on 15-1-15.
 */
$(function(){
    $(".nav li").hover(function(){
        $(this).children("ul").stop(true,true).slideDown();
    },function(){
        $(this).children("ul").stop(true,true).slideUp();
    });

    function getElement(id){
        return document.getElementById(id);
    }

    var speed=30;//滚动速度
    var demo=getElement("demo");
    var demo2=getElement("demo2");
    var demo1=getElement("demo1");
    demo2.innerHTML=demo1.innerHTML//复制demo1中的图片到demo2中

    function Marqueeleft(){//向左滚动
        if(demo2.offsetWidth-demo.scrollLeft<=0)
            demo.scrollLeft-=demo1.offsetWidth
        else
            demo.scrollLeft++
    }

    function Marqueeright(){//向右滚动
        if(demo2.offsetWidth-demo.scrollLeft>=565)
            demo.scrollLeft+=demo1.offsetWidth
        else
            demo.scrollLeft--
    }

    var MyMar=setInterval(Marqueeleft,speed)//自动开始滚动
    Direction='Left';//设定初始方向为向左滚
    demo.onmouseover=function() {clearInterval(MyMar)}
    demo.onmouseout=function() {
        if(Direction=='Left'){
            MyMar=setInterval(Marqueeleft,speed)
        }else if(Direction=='Right'){
            MyMar=setInterval(Marqueeright,speed)
        }
    };
})