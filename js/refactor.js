var date = new Date();
var currentMonth =  date.getMonth();
var currentYear =  date.getYear();

var MonthName = {
  month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  displayMonth: function() {
    $('#month_name').text(this.month_names[currentMonth]);
  }
}

var Controls = {
  previousMonth: function() {
      if (currentMonth >= 1) {
        currentMonth--
      }
      return currentMonth;
  },
  nextMonth: function() {
      if (currentMonth < 11) {
        currentMonth++;
      }
      return currentMonth;
  }
}

function GetMonth(){

  this.getDays = function(year, month) {
    var d = new Date(year, month, 0);
    var newDate = d.getDate();
    this.buildDays(newDate)
    return newDate;
  }

  this.buildDays = function(newDate) {
       if ($('#calendar_days').length >  0) {
           $('#calendar_days').empty();
       }

       for (var i = 1; i < newDate + 1; i++) {
         $('#calendar_days').append('<div class="day">' + i + '</div>');
       }
   }
}

$(document).ready(function() {

    $('.previous').click(function(e){
        e.preventDefault();
        var newMonthP = Controls.previousMonth();
        var thisMonth = new GetMonth()
        var x = thisMonth.getDays(currentYear,currentMonth)
        MonthName.displayMonth();
        console.log(x + ' days' + currentMonth + ' month');
    });

    $('.next').click(function(e){
        e.preventDefault()
        Controls.nextMonth();
        var thisMonth = new GetMonth()
        var x = thisMonth.getDays(currentYear,currentMonth)
        MonthName.displayMonth();
        console.log(x + ' days' + currentMonth + ' month');
    });

})
