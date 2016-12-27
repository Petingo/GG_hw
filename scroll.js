$(document).ready(function() {

    var num_li = $(".nav li").length;
    
    var n = 1;
    var moving = 0;
    var screen_height_avg = ($(window).height()-25-5*8) / (num_li);
    
    for(var i = 1 ; i <= num_li ; i++){
        $(".p" + i).css("height", screen_height_avg);
    }
    
    for(var i = 1 ; i <= num_li ; i++){
        $(".li_content").eq(i).css("padding-top",screen_height_avg/4);   
    }
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

      點選右方導覽列時會到指定圖片
    for (var i = 0; i <= num_li; i++) {
        $(".nav li").eq(i).click({
            id: i
        }, function(e) {
            var page = e.data.id + 1;
            $("html,body").animate({
                "scrollTop": $(".p0" + page).offset().top
            })
            select(e);
            //$(this).css("background-image", "url(./src/pic/select.png)");
            n = e.data.id +1
        })
    }
    var li_width = 110;
    $(window).scroll(function() {
        var now;
        if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
            select(0);
//            $(".nav li").stop().animate({"width":li_width});
//            $(".li_content").stop().fadeIn(200);
        } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
            select(1);
//            for(var i = 0 ; i <= num_li ; i++){
//                if(i == 1) continue;
//                $(".li_content").eq(i).stop().fadeOut(200);
//                $(".nav li").eq(i).stop().animate({"width":"10px"}); 
//                
//            }
//            $(".nav li").eq(i).animate({width:'10px'});
//            $(".li_content:eq(0)").delay(0).fadeIn();
//            
//            $(".nav li").css("width", "10px");
//            $(".nav li:eq(1)").css("width", li_width);
//            $(".li_content").css("display", "none");
//            $(".li_content:eq(0)").css("display", "");
        } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
            select(2);
        } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
            select(3);
        } else if ($(window).scrollTop() >= $(".p05").offset().top && $(window).scrollTop() < $(".p06").offset().top) {
            select(4);
        } else if ($(window).scrollTop() >= $(".p06").offset().top && $(window).scrollTop() < $(".p07").offset().top) {
            select(5);
        } else if ($(window).scrollTop() >= $(".p07").offset().top && $(window).scrollTop() < $(".p08").offset().top) {
            select(6);
        } else if ($(window).scrollTop() >= $(".p08").offset().top) {
            select(7);
        }
    })
    
    function select(x){
        for(var i = 0 ; i <= num_li ; i++){
            if(i==x){
                $(".nav ul li").css("opacity", "0.9");
            }else{
                $(".nav ul li").eq(i).css("opacity", "0.8");
                $(".nav ul li").eq(i).hover(function(){
                    $(this).css("opacity", "0.9");
                })
            }
        }
        //第一次用滑鼠點選後hover效果會消失
//        $(".nav ul li").css("opacity", "0.8");
////        $(".nav ul li").hover(function(){
////            $(this).css("opacity", "0.9");
////        })
////        
//        $(".nav ul li").eq(x).css("opacity", "0.9");
    }
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
    $(window).resize(function() {
        ready();
    })
})