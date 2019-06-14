var currentPage = 1;

$(function () {
    $(".prev").click(function () {

        if (currentPage != 1) {
            $(".list").animate({
                left: '+=348px'
            });
            --currentPage;
        }
    });

    $(".next").click(function () {

        if (currentPage != 3) {
            $(".list").animate({
                left: '-=348px'
            });
            ++currentPage;
        } else {
            $(".list").animate({
                left: '+=696px'
            });
            currentPage = 1;
        }
    });

});
