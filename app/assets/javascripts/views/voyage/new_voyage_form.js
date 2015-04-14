TaskPirates.Views.VoyageNewForm = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button.btn-advance-step' : 'saveResponse',
    'click button.find-sailors' : 'findSailors',
    'click a.js-move-left.start' : 'shiftStDtLeft',
    'click a.js-move-right.start' : 'shiftStDtRight',
    'click a.js-move-left.end' : 'shiftEdDtLeft',
    'click a.js-move-right.end' : 'shiftEdDtRight'
  },

  template: [JST['new_voyage_form/questions'],
            JST['layouts/header_image'],
            JST['new_voyage_form/date_picker'],
            JST['new_voyage_form/date_picker_container']],

  render: function () {
    this.$el.html(this.template[1]());
    var content = this.template[0]();
    this.$el.append(content);

    startDateCont = this.template[3]({
      type: 'start',
      className: 'start-date-picker'
    });
    this.$el.find('.job-form-fields').append(startDateCont);
    this.addStDatePickers(15);

    endDateCont = this.template[3]({
      type: 'end',
      className: 'end-date-picker'
    });
    this.$el.find('.job-form-fields').append(endDateCont);
    this.addEdDatePickers(15);

    return this;
  },

  shift: function (className, inc) {
    var leftPix = this.$el.find(className).css('left');
    var leftVal = Number(leftPix.slice(0, -2));
    var newLeftVal = inc(leftVal);
    this.$el.find(className).css('left', newLeftVal);
  },


  shiftStDtLeft: function () {
    this.shiftLeft('.start-date-picker');
  },

  shiftEdDtLeft: function () {
    this.shiftLeft('.end-date-picker');
  },

  shiftLeft: function (className) {
    this.shift(className, function (leftVal) {
      if(className === '.start-date-picker'){
        this.addStDatePickers(4);
      } else {
        this.addEdDatePickers(4);
      }
      return leftVal - 400;
    }.bind(this));
  },

  shiftStDtRight: function () {
    this.shiftRight('.start-date-picker');
  },

  shiftEdDtRight: function () {
    this.shiftRight('.end-date-picker');
  },

  shiftRight: function (className) {
    this.shift(className, function (leftVal) {
      if(leftVal < 0) {
        return leftVal + 400;
      }

      return leftVal;
    });
  },

  addEdDatePickers: function (num) {
    this.addDatePickers(num, 'end_date', '.end-date-picker',
                        'end-date-container');
  },

  addDatePickers: function (num, typeName, className, containerName) {
    containerReference = "." + containerName;
    var datePickers = $(containerReference);
    var numDatePickers = 0;

    if(datePickers) {
      numDatePickers = datePickers.length;
    }

    var date = new Date();
    date.setDate(date.getDate() + numDatePickers);
    for (var i = 0; i < num; i++) {
      this.addDatePicker(date, typeName, className, containerName);
      date.setDate(date.getDate() + 1);
    }
  },

  addDatePicker: function (dateObj, typeName, className, containerName) {
    var days = ['Sunday','Monday','Tuesday','Wednesday',
                'Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

    var dayNum = dateObj.getDate();
    var dayName = days[ dateObj.getDay() ];
    var monthNum = dateObj.getMonth();
    var monthName = months[ monthNum ];
    var yearNum = dateObj.getFullYear();
    var fullDate = yearNum + "-" + (monthNum + 1) + "-" + dayNum;

    var content = this.template[2]({
      containerName: containerName,
      typeName: typeName,
      fullDate: fullDate,
      monthName: monthName,
      dayNum: dayNum,
      dayName: dayName
    });

    this.$el.find(className).append(content);
  },

  saveResponse: function (event) {
    event.preventDefault();
    var attrs = this.$(':input').serializeJSON();

    this.model.set(attrs);
    this.model.save();
  },

  findSailors: function (event) {
    event.preventDefault();
    this.saveResponse(event);
    var fragment = "voyages/" + this.model.get('id') + "/hire";
    Backbone.history.navigate(fragment, { trigger: true });
  },

  addStDatePickers: function (num) {
    this.addDatePickers(num, 'start_date', '.start-date-picker',
                        'start-date-container')
  }
});
