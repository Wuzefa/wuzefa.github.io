$(function(){
	$(".nav li").hover(function(){
		$(this).children("ul").stop(true,true).slideDown();			
	},function(){
		$(this).children("ul").stop(true,true).slideUp();
	});		    
})