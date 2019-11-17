$(function () {
    $(document).scroll(function() {
        var $nav = $("#nav-container");
        var $link = $("a.nav-link");
        var $brand = $("a.navbar-brand");
        var $toggler = $(".navbar-toggler-icon");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $link.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $brand.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $toggler.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});