/**
 * Created by lenovo on 17/4/5 005.
 */
$(function(){
    $(".tab_menu ul li").click(function(){
        $(this).addClass("selected").siblings("li").removeClass("selected")
        var n=$(this).index();
        $(".tab_box div").eq(n).show().siblings("div").hide();
    });
    $(".pro_size ul li").click(function(){
        $(this).addClass("cur").siblings("li").removeClass("cur");
        var p=$(this).text();
        $(".pro_size strong").text(p);
    })
});