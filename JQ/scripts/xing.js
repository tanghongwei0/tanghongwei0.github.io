/**
 * Created by lenovo on 17/4/5 005.
 */
$(function(){
    $("#num_sort").change(function(){
        var n=$(this).val();
        $(".pro_price strong").text(200*n);
    });
    $(".rating li a").click(function(){
        var c=$(this).parent().attr("class");
        $(this).parent().parent().attr("class","rating "+c+"star")
    })
});