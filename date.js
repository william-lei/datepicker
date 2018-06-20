(function () {
    var datepicker = {};

    datepicker.getMonthDate = function (year, month) {
        var ret = [];

        if (!year || !month) {
            var d = new Date();
            year = d.getFullYear();
            month = d.getMonth() + 1;
        }

        // 获取这个月的第一天
        var firstDay = new Date(year, month - 1, 1);


        // 获取年，月
        var year = firstDay.getFullYear();
        var month = firstDay.getMonth() +1;



        // 获取这个月第一天是星期几
        var firstDayWeekDay = firstDay.getDay();
        if (firstDayWeekDay === 0) {
            firstDayWeekDay = 7;
        }

        // 获取上个月的最后一天
        var lastDayOfLastMonth = new Date(year, month - 1, 0);
        // 获取上个月最后一天是几号
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        // 获取这个月最后一天
        var lastDay = new Date(year, month, 0);
        // 获取这个月最后一天是几号
        var lastDate = lastDay.getDate();

        // 日历中第一行上个月遗留的天数
        var preMonthDayCount = firstDayWeekDay - 1;


        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                // 上一月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) {
                thisMonth = 12;
            }
            if (thisMonth === 13) {
                thisMonth = 1;
            }

            ret.push({
                month:thisMonth,
                date:date,
                showDate:showDate
            });
        }

        return {
            days:ret,
            year:year,
            month:month
        };
    }




    window.datepicker = datepicker;
})();