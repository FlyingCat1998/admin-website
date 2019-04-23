!function($) {
    "use strict";
    // Minimalize menu
    $('.navbar-minimalize').on('click', function () {
        if($(window).width() > 991)
        {
            $("body").toggleClass("mini-navbar");
        }
        else
        {
            $("body").toggleClass("mini-navbar-show");
        }
        $('.sidebar-nav').slimScroll({
            height: '90vh'
        });
        $('.mini-navbar .sidebar-nav').slimScroll({destroy: true});
        $('.mini-navbar .sidebar-nav').removeAttr("style");

        $('.mini-navbar-show .sidebar-nav').slimScroll({destroy: true});
        $('.mini-navbar-show .sidebar-nav').removeAttr("style");

    });
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
    // $.material.init();

    $(function(){
        $('.scroller').slimScroll({
            height: '250px'
        });
        $('.sidebar-nav').slimScroll({
            height: '90vh'
        });
        //$('#input-date-added').datepicker();
        //$('#input-date-modified').datepicker();
        $('#menu').metisMenu();
    });



}(window.jQuery);