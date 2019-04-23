!function($) {
    "use strict";
    $(function(){
        var chart1 = c3.generate({
            bindto: '#donut_top10_games',
            data: {
                columns: [
                    ['Red Dead Redemption 2', 120],
                    ['Devil May Cry 5', 135],
                    ['The Legend of Zelda', 40],
                    ['God of War 4', 235],
                    ['Assassin\'s Creed 2', 50],
                    ['Sekiro: Shadows die twice', 156],
                    ['Dark souls', 90],
                    ['game2', 21],
                    ['game3', 40],
                    ['game4', 75],
                ],
                type : 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Top 10 game bán chạy"
            }
        });

        var chart2 = c3.generate({
            bindto: '#donut_top10',
            data: {
                columns: [
                    ['Chi nhánh Thủ Đức', 150],
                    ['Chi nhánh Quận 5', 535],
                    ['Chi nhánh Quận 1', 723],
                    ['Chi nhánh Tân Bình', 235],
                    ['Chi nhánh Quận 7', 368],
                ],
                type : 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Top 5 chi nhánh"
            }
        });

    });

}(window.jQuery);