var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //让分页器支持点击
        clickable: true
    },

    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next'
    }
});
var mp3=document.querySelector("#mp3");
var mp3btn=document.querySelector("#mp3btn");

mp3btn.addEventListener("click",function(){
    if (mp3.paused){
        mp3.play();
        mp3btn.style.animationPlayState="running";      /*running开始*/
    }else {
        mp3.pause();
        mp3btn.style.animationPlayState="paused";       /*paused暂停*/
    }
});