/**
 * Created by lhp on 15-1-14.
 */
$(window).scroll(function(){

    if($(window).scrollTop()>100){

        $("#div1").fadeIn(6000);
    }
    
    if($(window).scrollTop()>400){

        $("#div2").animate({marginLeft:'0px',opacity:'1'},1000);
        $("#div3").animate({opacity:'1'},3000);
    }
    if($(window).scrollTop()>800){
        $("#div4").animate({marginLeft:'0px',opacity:'1'},1000);
        $("#div5").animate({opacity:'1'},3000);
    }
    if($(window).scrollTop()>1200){
        $("#div6").animate({marginLeft:'0px',opacity:'1'},1000);
        $("#div7").animate({opacity:'1'},3000);
    }
})
$(document).ready(function(){ 
   if($(window).height()>200){
        $("#div1").fadeIn(6000); 
    } 
})
