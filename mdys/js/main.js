/**
 * Created by ty on 2017/6/6.
 */


window.onload = function () {

    $('.brow-close').click(function(){
        $('.browserupgrade').css('display','none');
    });


    var oBtn = document.getElementById('btn');
    var oDiv = document.getElementById('banner-div');
    oBtn.onmouseover = function(){
        oDiv.style.display = 'block';
    };
    oBtn.onmouseout = function(){
        oDiv.style.display = 'none';
    };

    var $tab_li = $('.tab-ul li');
    $tab_li.hover(function(){
        $(this).addClass('act').siblings().removeClass('act');
        var index = $tab_li.index(this);
        $('.tab-div > div').eq(index).show().siblings().hide();
    });


}