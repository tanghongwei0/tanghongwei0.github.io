/**
 * Created by lenovo on 17/4/5 005.
 */
$(function(){
    $("#skin li").click(function(){
        var i=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass("selected")
        $("#cssfile").attr("href","styles/skin/skin_"+i+".css")
    })

    $(".nav li").hover(function(){
        $(this).find(".jnNav").stop().slideDown(500);
    },function(){
        $(this).find(".jnNav").stop().slideUp(500);
    })
});