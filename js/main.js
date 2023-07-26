$(document).ready(function () {


   
    $(".t5").on("click", function () {
        $(".star-rateing ul li svg").css("fill", "#FEBF00");
        $('.add-r').fadeIn();
    })
    $(".t4").on("click", function () {
        $(".star-rateing ul li svg").css("fill", "#CDCDCD");
        $(".t4 svg").css("fill", "#FEBF00")
        $(".t1 svg").css("fill", "#FEBF00")
        $(".t2 svg").css("fill", "#FEBF00")
        $(".t3 svg").css("fill", "#FEBF00")
        $('.add-r').fadeIn();


    })
    $(".t3").on("click", function () {
        $(".star-rateing ul li svg").css("fill", "#CDCDCD");
        $(".t1 svg").css("fill", "#FEBF00")
        $(".t2 svg").css("fill", "#FEBF00")
        $(".t3 svg").css("fill", "#FEBF00")
        $('.add-r').fadeIn();


    })
    $(".t2").on("click", function () {
        $(".star-rateing ul li svg").css("fill", "#CDCDCD");
        $(".t1 svg").css("fill", "#FEBF00")
        $(".t2 svg").css("fill", "#FEBF00")
        $('.add-r').fadeIn();

    })
    $(".t1").on("click", function () {
        $(".star-rateing ul li svg").css("fill", "#CDCDCD");
        $(".t1 svg").css("fill", "#FEBF00")
        $('.add-r').fadeIn();

    });

 })
