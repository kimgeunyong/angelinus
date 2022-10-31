$("document").ready(function(){

    const swiper = new Swiper(".head.swiper",{
        autoplay: {
            delay: 3000
        },
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        }
    })

    swiper.on("transitionEnd", function(e) {
        let i = swiper.realIndex;
        console.log(i);
        if(i % 2 == 1) {
            $(".box1").stop().fadeIn();
            $(".box2").stop().fadeOut();
        }
        else {
            $(".box2").stop().fadeIn();
            $(".box1").stop().fadeOut();
        }
    })

    $(".header .header-list .etc .hamburger").click(function(){
        $(".header .header-list .side-nav").addClass("on")
    })
    $(".header .header-list .side-nav .close").click(function(){
        $(".header .side-nav").removeClass("on")
    })
    // 헤더리스트
    // 헤더리스트
    // 헤더리스트

    $(".content .menu ul li").eq(0).addClass("on")
    $(".content .menu ul li").click(function(){
        let i = $(this).index();
        $(".content .menu ul li").removeClass("on").eq(i).addClass("on")
        $(".content .menu-pic ul").removeClass("on")
    })


    $(".content .menu-pic .pic:nth-child(1)").addClass("on")
    // $(".content .menu-pic .menu-txt:nth-child(4)").addClass("on")
    $(".content .menu .menu-list ul li:nth-child(1)").click(function(){
        $(".content .menu-pic .pic:nth-child(1)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(1))").click(function(){
        $(".content .menu-pic .pic:nth-child(1)").removeClass("on")
    })
    // 메뉴
    $(".content .menu .menu-list ul li:nth-child(2)").click(function(){
        $(".content .menu-pic .pic:nth-child(2)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(2))").click(function(){
        $(".content .menu-pic .pic:nth-child(2)").removeClass("on")
    })
        // 메뉴
    $(".content .menu .menu-list ul li:nth-child(3)").click(function(){
        $(".content .menu-pic .pic:nth-child(3)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(3))").click(function(){
        $(".content .menu-pic .pic:nth-child(3)").removeClass("on")
    })
        // 메뉴
    $(".content .menu .menu-list ul li:nth-child(4)").click(function(){
        $(".content .menu-pic .pic:nth-child(4)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(4))").click(function(){
        $(".content .menu-pic .pic:nth-child(4)").removeClass("on")
    })
        // 메뉴
    $(".content .menu .menu-list ul li:nth-child(5)").click(function(){
        $(".content .menu-pic .pic:nth-child(5)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(5))").click(function(){
        $(".content .menu-pic .pic:nth-child(5)").removeClass("on")
    })
        // 메뉴
    $(".content .menu .menu-list ul li:nth-child(6)").click(function(){
        $(".content .menu-pic .pic:nth-child(6)").addClass("on")
    })
    $(".content .menu .menu-list ul li:not(:nth-child(6))").click(function(){
        $(".content .menu-pic .pic:nth-child(6)").removeClass("on")
    })
    // 메뉴
    // 메뉴
    // 메뉴

    const pic = new Swiper(".pic",{
        autoplay: {
            delay: 3000
        },
        slidesPerView: 5,
        loop: true,
        centeredSlide: true
        // pagination:{
        //     el: ".swiper-pagination",
        //     clickable: true
        // }
    });
    // 메뉴 스와이퍼
    // 메뉴 스와이퍼
    // 메뉴 스와이퍼

    $(".content .special .title ul li:nth-child(3)").addClass("on")
    $(".content .special .title ul li").click(function(){
        let i = $(this).index()
        $(".content .special .title ul li").removeClass("on").eq(i).addClass("on")
    })


    $(".content .special .box .island").addClass("on")
    $(".content .special .title ul li:nth-child(1)").click(function(){
        $(".content .special .box .lab1004").addClass("on")
        $(".content .special .box .l7").removeClass("on")
        $(".content .special .box .island").removeClass("on")
        $(".content .special .box .di").removeClass("on")
        $(".content .special .box .lw").removeClass("on")
    })
    $(".content .special .title ul li:nth-child(2)").click(function(){
        $(".content .special .box .l7").addClass("on")
        $(".content .special .box .lab1004").removeClass("on")
        $(".content .special .box .island").removeClass("on")
        $(".content .special .box .di").removeClass("on")
        $(".content .special .box .lw").removeClass("on")

    })
    $(".content .special .title ul li:nth-child(3)").click(function(){
        $(".content .special .box .island").addClass("on")
        $(".content .special .box .lab1004").removeClass("on")
        $(".content .special .box .l7").removeClass("on")
        $(".content .special .box .di").removeClass("on")
        $(".content .special .box .lw").removeClass("on")
    })
    $(".content .special .title ul li:nth-child(4)").click(function(){
        $(".content .special .box .di").addClass("on")
        $(".content .special .box .lab1004").removeClass("on")
        $(".content .special .box .l7").removeClass("on")
        $(".content .special .box .island").removeClass("on")
        $(".content .special .box .lw").removeClass("on")
    })
    $(".content .special .title ul li:nth-child(5)").click(function(){
        $(".content .special .box .lw").addClass("on")
        $(".content .special .box .lab1004").removeClass("on")
        $(".content .special .box .l7").removeClass("on")
        $(".content .special .box .island").removeClass("on")
        $(".content .special .box .di").removeClass("on")
    })

    $(".content .special .lab1004 ul:nth-child(2)").click(function(){
        $(".content .special .lab1004 ul:nth-child(2) li img").attr("src", "images/lab1004(1).png")
    })
    $(".content .special .lab1004 ul:nth-child(3) li:nth-child(1)").click(function(){
        let i = $(this).index()
        $(".content .special .lab1004 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lab1004 ul:nth-child(2) li img").attr("src", "images/lab1004(2-1).png")
        
    })
    $(".content .special .lab1004 ul:nth-child(3) li:nth-child(2)").click(function(){
        let i = $(this).index()
        $(".content .special .lab1004 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lab1004 ul:nth-child(2) li img").attr("src", "images/lab1004(3-1).png")
        
    })
    $(".content .special .lab1004 ul:nth-child(3) li:nth-child(3)").click(function(){
        let i = $(this).index()
        $(".content .special .lab1004 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lab1004 ul:nth-child(2) li img").attr("src", "images/lab1004(4-1).png") 
    })

    $(".content .special .l7 ul:nth-child(2)").click(function(){
        $(".content .special .l7 ul:nth-child(2) li img").attr("src", "images/l7(1).png")
    })
    $(".content .special .l7 ul:nth-child(3) li:nth-child(1)").click(function(){
        let i = $(this).index()
        $(".content .special .l7 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .l7 ul:nth-child(2) li img").attr("src", "images/l7(2-1).png")
    })
    $(".content .special .l7 ul:nth-child(3) li:nth-child(2)").click(function(){
        let i = $(this).index()
        $(".content .special .l7 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .l7 ul:nth-child(2) li img").attr("src", "images/l7(3-1).png")
    })
    $(".content .special .l7 ul:nth-child(3) li:nth-child(3)").click(function(){
        let i = $(this).index()
        $(".content .special .l7 ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .l7 ul:nth-child(2) li img").attr("src", "images/l7(4-1).png")
    })

    $(".content .special .island ul:nth-child(2)").click(function(){
        $(".content .special .island ul:nth-child(2) li img").attr("src", "images/island(1).png")
    })
    $(".content .special .island ul:nth-child(3) li:nth-child(1)").click(function(){
        let i = $(this).index()
        $(".content .special .island ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .island ul:nth-child(2) li img").attr("src", "images/island(2-1).png")
    })
    $(".content .special .island ul:nth-child(3) li:nth-child(2)").click(function(){
        let i = $(this).index()
        $(".content .special .island ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .island ul:nth-child(2) li img").attr("src", "images/island(3-1).png")
    })
    $(".content .special .island ul:nth-child(3) li:nth-child(3)").click(function(){
        let i = $(this).index()
        $(".content .special .island ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .island ul:nth-child(2) li img").attr("src", "images/island(4-1).png")
    })

    $(".content .special .di ul:nth-child(2)").click(function(){
        $(".content .special .di ul:nth-child(2) li img").attr("src", "images/di(1).png")
    })
    $(".content .special .di ul:nth-child(3) li:nth-child(1)").click(function(){
        let i = $(this).index()
        $(".content .special .di ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .di ul:nth-child(2) li img").attr("src", "images/di(2-1).png")
    })
    $(".content .special .di ul:nth-child(3) li:nth-child(2)").click(function(){
        let i = $(this).index()
        $(".content .special .di ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .di ul:nth-child(2) li img").attr("src", "images/di(3-1).png")
    })
    $(".content .special .di ul:nth-child(3) li:nth-child(3)").click(function(){
        let i = $(this).index()
        $(".content .special .di ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .di ul:nth-child(2) li img").attr("src", "images/di(4-1).png")
    })

    $(".content .special .lw ul:nth-child(2)").click(function(){
        $(".content .special .lw ul:nth-child(2) li img").attr("src", "images/lotteworld(1).png")
    })
    $(".content .special .lw ul:nth-child(3) li:nth-child(1)").click(function(){
        let i = $(this).index()
        $(".content .special .lw ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lw ul:nth-child(2) li img").attr("src", "images/lotteworld(2-1).png")
    })
    $(".content .special .lw ul:nth-child(3) li:nth-child(2)").click(function(){
        let i = $(this).index()
        $(".content .special .lw ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lw ul:nth-child(2) li img").attr("src", "images/lotteworld(3-1).png")
    })
    $(".content .special .lw ul:nth-child(3) li:nth-child(3)").click(function(){
        let i = $(this).index()
        $(".content .special .lw ul:nth-child(3) li").removeClass("on").eq(i).addClass("on")
        $(".content .special .lw ul:nth-child(2) li img").attr("src", "images/lotteworld(4-1).png")
    })
})