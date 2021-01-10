$("header").click(function () {
    if ($("header a").hasClass("active")) {
        $(".hide").css({display: "inherit"})
        $("header a").removeClass("active")
    } else {
        $(".hide").css({display: "none"})
        $(".show").addClass("active")
        $("footer").css({display: "none"})
    }
    $("section").slideToggle()
    $(".success").click(function () {
        $("footer").slideDown()
    })
})