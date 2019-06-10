var text ="";

$(function () {
    $(".tabs > li > a").click(function (event) {
        event.preventDefault();
        text = $(this).text();

        if (text == "공지사항") {
            $(".tab_menu > .content > ul").css("display", "none");
            $(".tabs > li").removeClass("active");
            $(".q").show();
            $("#q").addClass("active");


        } else if (text == "독서문화") {
            $(".tab_menu > .content > ul").css("display", "none");
            $(".tabs > li").removeClass("active");
            $(".w").show();
            $("#w").addClass("active");
        } else if (text == "평생교육") {
            $(".tab_menu > .content > ul").css("display", "none");
            $(".tabs > li").removeClass("active");
            $(".e").show();
            $("#e").addClass("active");
        }
    });

});
