(function(){
    var datepicker = window.datepicker;

    datepicker.buildUi = function(year,month){
        var monthDate = datepicker.getMonthDate(year,month);


        var html = '<div class="datepicker-header">'+
            '<a href="" class="datepicker-prev-btn detepicker-btn">&lt;</a>'+
            '<a href="" class="datepicker-next-btn detepicker-btn">&gt;</a>'+
            '<span class="datepicker-curr-month">'+monthDate.year+'-'+monthDate.month+'</span>'+
        '</div>'+
        '<div class="datepicker-body">'+
            '<table>'+
                '<thead>'+
                    '<tr>'+
                        '<th>一</th>'+
                        '<th>二</th>'+
                        '<th>三</th>'+
                        '<th>四</th>'+
                        '<th>五</th>'+
                        '<th>六</th>'+
                        '<th>日</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>';

                for(var i= 0;i < monthDate.days.length; i++){
                    var date = monthDate.days[i];
                    if(i % 7 === 0){
                        html += '<tr>';
                    }
                    
                    html += '<td>'+ date.showDate+ '</td>';

                    if(i % 7 === 6){
                        html += '</tr>';
                    }
                }

               html += '</tbody>'+
           '</table>'+
        '</div>';

        return html;
    };

    datepicker.init = function ($input,year,month){
        var html = datepicker.buildUi(year,month);
        var $wraper = document.createElement('div');
        $wraper.className = 'datepicker-wrap';
        $wraper.innerHTML = html;

        document.body.appendChild($wraper);
    };

})();   