(function(){
    var datepicker = window.datepicker;
    var monthDate,$wraper;

    datepicker.buildUi = function(year,month){
        monthDate = datepicker.getMonthDate(year,month);
        console.log(monthDate.year+"--"+monthDate.month);


        var html = '<div class="datepicker-header">'+
            '<a href="#" class="datepicker-prev-btn detepicker-btn">&lt;</a>'+
            '<a href="#" class="datepicker-next-btn detepicker-btn">&gt;</a>'+
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


    datepicker.render = function (direction){
        var year,month;
        
        if(direction === 'prev'){
            year = monthDate.year;
            month = monthDate.month;
            month--;
        }
        if(direction === 'next'){
            alert('下个月')
            year = monthDate.year;
            month = monthDate.month;
            month++;
            console.log(year+'--------------'+month);
        }
        

        
        

        var html = datepicker.buildUi(year,month);
        console.log(html)
        $wraper = document.createElement('div');

        console.log($wraper)
        var oldDom = document.querySelector('.datepicker-wrap');
        if(oldDom != null){
            oldDom.remove();
            $wraper.className = 'datepicker-wrap datepicker-wrap-show';
        }else{
            $wraper.className = 'datepicker-wrap ? (datepicker-wrap datepicker-wrap-show) : datepicker-wrap';
        }
        
        $wraper.innerHTML = html;
        document.body.appendChild($wraper);
    }

    datepicker.init = function (input,year,month){
        datepicker.render();
        // var html = datepicker.buildUi(year,month);
        // $wraper = document.createElement('div');
        // $wraper.className = 'datepicker-wrap';
        // $wraper.innerHTML = html;
        // document.body.appendChild($wraper);

        var $input = document.querySelector('input');
        var isOpen = false;
        $input.addEventListener('click',function(){
            
            if(!isOpen){
                $wraper.classList.add('datepicker-wrap-show');
                // 显示之前计算$wraper的位置
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var inputHeight = $input.offsetHeight;
                $wraper.style.left = left + 'px';
                $wraper.style.top = top + inputHeight + 'px';

                isOpen = true;
            }else{
                $wraper.classList.remove('datepicker-wrap-show');
                isOpen = false;
            }
        },false);

        $wraper.addEventListener('click',function(e){
            alert(11111)
            var $target = e.target;

            if(!$target.classList.contains('detepicker-btn')){
                return false;
            }

            if($target.classList.contains('datepicker-prev-btn')){
                // 上一月
                datepicker.render('prev');

            }else if($target.classList.contains('datepicker-next-btn')){
                alert('出发')
                // 下一月
                datepicker.render('next');
            }



        },false);

    };

})();   