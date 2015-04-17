Date.prototype.fullLongDate = function () {
  var days = ['Sunday','Monday','Tuesday','Wednesday',
              'Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  var dayNum = this.getDate();
  var dayName = days[ this.getDay() ];
  var monthNum = this.getMonth();
  var monthName = months[ monthNum ];
  var yearNum = this.getFullYear();
  return yearNum + "-" + (monthNum + 1) + "-" + dayNum;
}
