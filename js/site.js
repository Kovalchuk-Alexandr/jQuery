// Можно сделать в css window.onscroll = function()
$(document).scroll(function () {
    if ($(document).width() < 1024)
        return false;
    
    // $(document).scrollTop() - Узнаем, сколько в px проскролили
    // Если больше половины основного блока - шапка появляется,
    // если меньше - исчезает
    if ($(document).scrollTop() > $(".full-page").height() / 2) {
        $("header").addClass("fixed");
    } else
        $("header").removeClass("fixed");
});

// Обработчик нажатия кнопки футера "наверх"
$(".up-btn").on("click", function () {
    $("html, body").animate({
        scrollTop: 0
    }, 'slow'); // 'slow' или '2000' (2 сек) скорость анимации
})

// Обработчик нажатия кнопки "меню"
$("#show-menu").on("click", function () {
    $("#hidden-menu").animate({
        "right": 0,
        function() {
            // $("body").css("opacity", "0.7")
        }
    }, 500);
    // $("body").css("opacity", "0.85")
    // $("body").css("background", "rgba(240, 229, 214, 0.65)")
    // $("body").css({
    //     "background-blend-mode": "multiply",
    //     "background": "rgba(59, 59, 59, 0.65)"
    // })
});

// Обработчик нажатия кнопки "close"
$("#hidden-menu .close").on("click", function () {
    $("#hidden-menu").animate({
        "right": "-250px"
    }, 200)
    // $("body").css("opacity", "1")
    // $("body").css("background-blend-mode", "normal")
});

// Ждем, когда страница полностью загрузится
// затем подключаем плагин slick
$("document").ready(function () {
    $("#slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // Значение по-умолчанию, переписываем, чтобы убрать надписи и добавить стрелки
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        prevArrow: '<div class="arrow-prev" ><i class="fas fa-arrow-left"></i></div>',
        nextArrow: '<div class="arrow-next" ><i class="fas fa-arrow-right"></i></div>'
    });
})