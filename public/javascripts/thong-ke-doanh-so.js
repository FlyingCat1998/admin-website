!function($) {
    "use strict";
    $(function(){
        var chart1 = c3.generate({
            bindto: '#columnchart_day',
            data: {
                x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2019-04-17', '2019-04-18', '2019-04-19', '2019-04-20', '2019-04-21', '2019-04-22'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['Doanh số', 1800000, 1700000, 2100000, 2200000, 2000000, 3000000],
                    ['Doanh thu', 1500000, 1200000, 1600000, 1400000, 1500000, 2400000],
                    ['Lợi nhuận', 400000, 500000, 500000, 300000, 350000, 800000],
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%d-%m'
                    }
                }
            }
        });

        var chart2 = c3.generate({
            bindto: '#columnchart_month',
            data: {
                x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x',  '2018-11-22','2018-12-22', '2019-01-22', '2019-02-22', '2019-03-22', '2019-04-22'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['Doanh số', 18000000, 22000000, 18000000, 17500000, 21000000, 19000000],
                    ['Doanh thu', 17000000, 15000000, 12000000, 16600000, 20000000, 17000000],
                    ['Lợi nhuận', 8000000, 12000000, 9000000, 9500000, 14000000, 1200000],
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%m-%Y'
                    }
                }
            },
            color: {pattern: ['#00bfff', '#ff0000', '#FFD700']},
        });

        var chart3 = c3.generate({
            bindto: '#columnchart_year',
            data: {
                x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x',  '2016-04-18','2017-04-18', '2018-04-18', '2019-04-18'],
                    ['Doanh số', 150403500, 247033000, 186093000, 358056000],
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y'
                    }
                }
            },
            color: {pattern: ['#ff0000']},
        });
    });
}(window.jQuery);