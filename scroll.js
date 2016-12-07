$(document).ready(function() {

    var num_li = $(".nav li").length;
    
    var n = 1;
    var moving = 0;
    $(window).mousewheel(function(e) {
        $("html, body").stop();
        if (moving == 0) {
            moving = 1;
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++;
                }
            } else {
                if (n > 1) {
                    n--;
                }
            }
        }
        console.log(n);
        $("html, body").animate({
            "scrollTop": $(".p0" + n).offset().top
        }, function(){
            moving = 0;
        })
    })

    //  點選右方導覽列時會到指定圖片
    for (var i = 0; i <= num_li; i++) {
        $(".nav li:eq(" + i + ")").click({
            id: i
        }, function(e) {
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            var page = e.data.id + 1;
            $("html,body").animate({
                "scrollTop": $(".p0" + page).offset().top
            })
            $(this).css("background-image", "url(./src/pic/select.png)");
            n = e.data.id +1
        })
    }

    //  一進入網頁時，將導覽列垂直置中
    center();

    //  縮放網頁時，重新將導覽列置中
    $(window).resize(function() {
        center();
    })

    //  計算導覽列垂直置中的高度
    function center() {
        var pos = $(window).height() / 2 - $(".nav").height() / 2;
        $(".nav").css("top", pos);
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
            $(".nav li").css("height", "35px");
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            $(".nav li:eq(0)").css("height", "60px");
            $(".nav li:eq(0)").css("background-image", "url(./src/pic/select.png)");
        } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
            $(".nav li").css("height", "35px");
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            $(".nav li:eq(1)").css("height", "60px");
            $(".nav li:eq(1)").css("background-image", "url(./src/pic/select.png)");
        } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
            $(".nav li").css("height", "35px");
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            $(".nav li:eq(2)").css("height", "60px");
            $(".nav li:eq(2)").css("background-image", "url(./src/pic/select.png)");
        } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
            $(".nav li").css("height", "35px");
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            $(".nav li:eq(3)").css("height", "60px");
            $(".nav li:eq(3)").css("background-image", "url(./src/pic/select.png)");
        } else if ($(window).scrollTop() >= $(".p05").offset().top) {
            $(".nav li").css("height", "35px");
            $(".nav li").css("background-image", "url(./src/pic/unselect.png)");
            $(".nav li:eq(4)").css("height", "60px");
            $(".nav li:eq(4)").css("background-image", "url(./src/pic/select.png)");
        }
    })
    
    //  點擊 gotop 時回到頂端
    $(".gotop").click(function(){
        $("html,body").animate({"scrollTop":"0"})
        n = 1;
    })
    
    //  離開頁頂時才出現 gotop 按扭
    $(".gotop").fadeOut(0);
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".p02").offset().top){
            $(".gotop").fadeIn();
        }else{
            $(".gotop").fadeOut();
        }
    });
})