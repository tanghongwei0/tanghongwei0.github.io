/**
 * Created by lenovo on 17/4/5 005.
 */
$(function(){
    $(".color_change ul li img").click(function(){
        $(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
        var imgSrc=$(this).attr("src");//完整路径
        var i=imgSrc.lastIndexOf(".");//.的索引
        var newImgSrc=imgSrc.substring(0,i);//.前面的路径
        var jpgImgsrc=imgSrc.substring(i);//.后面的路径
        $("#bigImg").attr("src",newImgSrc+"_one_small"+jpgImgsrc);
        //var color=imgSrc.replace("images/pro_img/","");
        var color=imgSrc.substring(15,i);
        $(".imgList li").hide();
        $(".imgList").find(".imgList_"+color).show();

        $(".imgList").find(".imgList_"+color).find("a").click();
        var t=$(this).attr("alt")
        $(".color_change strong").text(t);
    })
});