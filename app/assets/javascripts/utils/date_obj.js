Date.prototype.fullLongDate = function () {
  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  var dayNum = this.getDate();
  var monthName = months[ monthNum ];
  var yearNum = this.getFullYear();
  return monthName + " " + dayNum + ", " + yearNum;
}
