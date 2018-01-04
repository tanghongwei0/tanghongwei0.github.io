new Vue({
    el:"#app",
    data:{
        lists:[
            {
                tit:"分类",
                img:"img/fenlei.png",
                url:"list.html"
            },
            {
                tit:"充值中心",
                img:"img/chongzhizhongxin.png",
                url:""
            },
            {
                tit:"手机数码",
                img:"img/shoujishuma.png",
                url:""
            },
            {
                tit:"领卷中心",
                img:"img/lingjuanzhongxin.png",
                url:""
            },
            {
                tit:"电器商城",
                img:"img/dianqishangcheng.png",
                url:""
            },
            {
                tit:"金融理财",
                img:"img/jinronglicai.png",
                url:""
            },
            {
                tit:"国美超市",
                img:"img/guomeichaoshi.png",
                url:""
            },
            {
                tit:"家居家装",
                img:"img/jiajujiazhuang.png",
                url:""
            },
            {
                tit:"国美管家",
                img:"img/guomeiguanjia.png",
                url:""
            },
            {
                tit:"我的",
                img:"img/wode.png",
                url:""
            }
            ],
        img1:[{imgq:"img/1.gif"}],
        zhuti:[
            {zhuti1:"img/zhiti1.jpg"},
            {zhuti1:"img/zhiti2.jpg"},
            {zhuti1:"img/zhiti3.jpg"},
            {zhuti1:"img/zhiti4.jpg"},
            {zhuti1:"img/zhiti5.jpg"},
            {zhuti1:"img/zhiti6.jpg"}
        ],
        jiadian:[
            {jiadian1:"img/jiadian1.jpg"},
            {jiadian1:"img/jiadian2.jpg"}
        ],
        pinzhi:[
            {pinzhi1:"img/pinzhi1.jpg"},
            {pinzhi1:"img/pinzhi2.jpg"}
        ],
        pinzhi2:[
            {pinzhi3:"img/pinzhi3.jpg"},
            {pinzhi3:"img/pinzhi4.jpg"},
            {pinzhi3:"img/pinzhi5.jpg"},
            {pinzhi3:"img/pinzhi6.jpg",lian:"list.html"}
        ],
        pinzhi4:[
            {pinzhi5:"img/pinzhi7.jpg"},
            {pinzhi5:"img/pinzhi8.jpg"}
        ],
        pinzhi6:[
            {pinzhi7:"img/pinzhi9.jpg",lian:""},
            {pinzhi7:"img/pinzhi10.jpg",lian:""},
            {pinzhi7:"img/pinzhi11.jpg",lian:""},
            {pinzhi7:"img/pinzhi12.jpg",lian:""},
            {pinzhi7:"img/pinzhi13.jpg",lian:""},
            {pinzhi7:"img/pinzhi14.jpg",lian:""},
            {pinzhi7:"img/pinzhi15.jpg",lian:""},
            {pinzhi7:"img/pinzhi16.jpg",lian:""}
        ],
        mylike:[
            {imgzz:"img/maylike1.jpg",jianjie:"美的洗碗机WQP8-3905-CN家用全自动除菌商用嵌入式带消",money:"￥3399.00"},
            {imgzz:"img/maylike2.jpg",jianjie:"沁园智能节水纯水机家用厨房反渗透除垢直饮净水器",money:"￥1596.00"},
            {imgzz:"img/maylike3.jpg",jianjie:"220v清洗机洗车器家用自助便携式电动洗车水枪水泵洗车泵刷车泵",money:"￥699.00"},
            {imgzz:"img/maylike4.jpg",jianjie:"耳宝/earbaby 长键无线蓝牙耳机4.0挂耳、耳塞式迷你商务运动听歌通用(黑)",money:"￥32.00"},
            {imgzz:"img/maylike5.jpg",jianjie:"格兰仕 23L 1级能效 智能APP 微波炉  光波炉 速热 银",money:"￥699.00"},
            {imgzz:"img/maylike6.jpg",jianjie:"天梭/Tissot手表 力洛克系列 钢带皮带机械男表(T41.1.483.52)",money:"￥2799.00"},
            {imgzz:"img/maylike7.jpg",jianjie:"忠臣（LOYOLA） LC-E013S电陶炉(T41.1.483.52)",money:"￥199.00"},
            {imgzz:"img/maylike8.jpg",jianjie:"九阳 （Joyoung）DJ13B-D82SG 豆浆机（破壁免滤 婴儿辅食营养米糊一机多能）",money:"￥448.00"},
            {imgzz:"img/maylike9.jpg",jianjie:"欧麦斯8098加热破壁料理机破壁机家用多功能榨汁机原汁机搅拌机避免糊底(T41.1.483.52)",money:"￥1280.00"},
            {imgzz:"img/maylike10.jpg",jianjie:"喜芬妮春秋桑蚕丝长袖性感蕾丝花边女式睡衣家居服二件套礼盒(1688绯红)",money:"￥1999.00"},
            {imgzz:"img/maylike11.jpg",jianjie:"42度洋河蓝色经典海之蓝480ml 绵柔国产 江苏白酒",money:"￥148.00"},
            {imgzz:"img/maylike12.jpg",jianjie:"南极人 凉席两件套 单人床学生宿舍上下铺席子夏季冰丝凉席",money:"￥58.00"}
        ],
        list_img:[
            {Img_list:"img/list_img.jpg",tit_list:"天梭/Tissot手表力洛克系列 钢带皮带机械男士表T41.1.483.33(银壳白面银钢带)",money_list:"¥2099.00",ping_list:"320人评论"},
            {Img_list:"img/list_img1.jpg",tit_list:"天梭/Tissot 瑞士手表 俊雅系列皮带石英男士手表T063.610.16.037.00(银壳白面棕带 皮带)",money_list:"¥888.00",ping_list:"106人评论"},
            {Img_list:"img/list_img2.jpg",tit_list:"天梭Tissot手表 经典腕表 力洛克系列 全自动机械表 皮带男表(T41.1.423.33)",money_list:"¥1212.00",ping_list:"78人评论"},
            {Img_list:"img/list_img3.jpg",tit_list:"天梭/Tissot 瑞士手表 经典系列简洁钢带石英日历男表T52.1.481.31(白色 钢带)",money_list:"¥1199.00",ping_list:"84人评论"},
            {Img_list:"img/list_img4.jpg",tit_list:"天梭/Tissot手表 力洛克系列 钢带皮带机械男表(T41.1.483.33)",money_list:"¥2799.00",ping_list:"150人评论"},
            {Img_list:"img/list_img5.jpg",tit_list:"天梭/Tissot 瑞士手表 T-Trend系列 钢带石英女表T058.009.11.031.00(银壳白面白带)",money_list:"¥1680.00",ping_list:"91人评论"},
            {Img_list:"img/list_img6.jpg",tit_list:"天梭/Tissot 瑞士手表 俊雅系列经典皮带石英男手表(t063.610.36.037.00)",money_list:"¥899.00",ping_list:"86人评论"},
            {Img_list:"img/list_img7.jpg",tit_list:"天梭/Tissot 瑞士手表梦幻系列钢带石英日历男士手表T033.410.11.013.00(男银壳白面白带)",money_list:"¥1399.00",ping_list:"150人评论"},
            {Img_list:"img/list_img8.jpg",tit_list:"天梭/Tissot瑞士手表 弗拉明戈系列钢带石英女表T094.210.11.121.00(银壳白面白带 钢带)",money_list:"¥1999.00",ping_list:"91人评论"},
            {Img_list:"img/list_img9.jpg",tit_list:"天梭TISSOT手表新款 俊雅系列男表石英表 瑞士手表男士(T063.610.36.037.00)",money_list:"¥999.00",ping_list:"36人评论"},
            {Img_list:"img/list_img10.jpg",tit_list:"天梭/Tissot手表 海星自动III系列机械男表(T065.430.16.031.00)",money_list:"¥2699.00",ping_list:"44人评论"},
            {Img_list:"img/list_img11.jpg",tit_list:"天梭/Tissot 瑞士手表 库图系列皮带石英女表T035.210.16.371.00(银壳红面红带)",money_list:"¥888.00",ping_list:"60人评论"},
            {Img_list:"img/list_img12.jpg",tit_list:"天梭(TISSOT)手表新款 俊雅系列男表石英表 瑞士手表男士(T063.610.16.058.00)",money_list:"¥888.00",ping_list:"244人评论"}
        ],
        shop_img:[
            {Img_shop:"img/list_img.jpg",tit_shop:"天梭/Tissot手表力洛克系列 钢带皮带机械男士表T41.1.483.33(银壳白面银钢带)",money_shop:"¥2099.00",ping_shop:"320人评论"},
            {Img_shop:"img/list_img1.jpg",tit_shop:"天梭/Tissot 瑞士手表 俊雅系列皮带石英男士手表T063.610.16.037.00(银壳白面棕带 皮带)",money_shop:"¥888.00",ping_shop:"106人评论"},
            {Img_shop:"img/list_img2.jpg",tit_shop:"天梭Tissot手表 经典腕表 力洛克系列 全自动机械表 皮带男表(T41.1.423.33)",money_shop:"¥1212.00",ping_shop:"78人评论"},
            {Img_shop:"img/list_img3.jpg",tit_shop:"天梭/Tissot 瑞士手表 经典系列简洁钢带石英日历男表T52.1.481.31(白色 钢带)",money_shop:"¥1199.00",ping_shop:"84人评论"},
            {Img_shop:"img/list_img4.jpg",tit_shop:"天梭/Tissot手表 力洛克系列 钢带皮带机械男表(T41.1.483.33)",money_shop:"¥2799.00",ping_shop:"150人评论"},
            {Img_shop:"img/list_img5.jpg",tit_shop:"天梭/Tissot 瑞士手表 T-Trend系列 钢带石英女表T058.009.11.031.00(银壳白面白带)",money_shop:"¥1680.00",ping_shop:"91人评论"}
        ]
    }
});
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
var swiper = new Swiper('.swiper-container1', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

$(function(){
   $(".list .banner a").click(function(){
       var a=$(this).index();
       $(this).eq(a).addClass("active");
       $(this).eq(a).parent().siblings().children().removeClass("active");
   })
});

$(function(){
    $(".shop .header li a").click(function(){
        var a=$(this).index();
        $(this).eq(a).addClass("active");
        $(this).eq(a).parent().siblings().children().removeClass("active");
    })
});