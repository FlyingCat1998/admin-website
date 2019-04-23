!function($) {
    "use strict";
    $(function(){

        $('.scrollerchat').slimScroll({
            height: '393px'
        });
        var chart = c3.generate({
            bindto: '#demo1',
            data: {
                columns: [
                    ['data1', 3000000, 2000000, 1500000, 2100000, 2300000, 1900000],
                ],
            },
        });

        var chart = c3.generate({
            bindto: '#spline',
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'donut',
                colors: {
                    data1: '#ff0000',
                    data2: '#4CAF50',
                    data3: '#00bcd4',

                },
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Iris Petal Width"
            }
        });
    });
}(window.jQuery);