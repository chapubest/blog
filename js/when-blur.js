jQuery(document).ready(function ($) {
    let title = document.title;
    $(window).on("blur", function() {
        document.title = "(っ °Д °;)っ - 茶铺的小站";
    });
    $(window).on("focus", function() {
        document.title = title;
    });
});