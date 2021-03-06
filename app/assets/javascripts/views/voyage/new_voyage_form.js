TaskPirates.Views.VoyageNewForm = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button.btn-advance-step' : 'saveResponse',
    'click button.find-sailors' : 'findSailors',
    'click a.js-move-left.start' : 'shiftStDtLeft',
    'click a.js-move-right.start' : 'shiftStDtRight',
    'click a.js-move-left.end' : 'shiftEdDtLeft',
    'click a.js-move-right.end' : 'shiftEdDtRight',
    'click label.date-picker-item.start_date' : 'adjustForNewStartDate'
  },

  template: [JST['new_voyage_form/questions'],
            JST['layouts/header_image'],
            JST['new_voyage_form/date_picker'],
            JST['new_voyage_form/date_picker_container']],

  render: function () {
    this.$el.html(this.template[1]({
      imageType: 'voyage-form-image'
    }));
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
    this.addEdDatePickers(25);

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
        this.addEdDatePickers(4);
      } else {
        this.addEdDatePickers(4);
      }
      return leftVal - 560;
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
      if(className === '.end-date-picker' && leftVal < this.endDateStop()){
        return leftVal + this.leftShiftVal(leftVal);
      } else if(className === '.start-date-picker' && leftVal < 0) {
        return leftVal + 560;
      }

      return leftVal;
    }.bind(this));
  },

  leftShiftVal: function (leftVal) {
    var val = 560;
    var diff = this.endDateStop() - leftVal;
    if(diff < val){
      val = diff;
    }

    return val;
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

    this.model.set(attrs.voyage);
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
  },

  adjustForNewStartDate: function (event) {
    var radioId = $(event.currentTarget).attr('id');
    var radioSelector = "#" + radioId;
    $(radioSelector).prop("checked", true);

    this.isStartDateGreaterFirstEndDate();
    this.isSelectStDateGreaterSelectEndDate();
  },

  isStartDateGreaterFirstEndDate: function () {
    var diff = this.selectedIdx('start_date') - this.firstEndDateIdx();

    if(diff >= 0) {
      this.shiftEndDateIdx(diff);
    }
  },

  isSelectStDateGreaterSelectEndDate: function () {
    var selectedStartIdx = this.selectedIdx('start_date');
    var selectedEndIdx = this.selectedIdx('end_date');
    if(selectedStartIdx >= this.selectedIdx('end_date')
        && selectedEndIdx !== -1) {
        var newEndDateIdx = this.selectedIdx('start_date') + 1;
        this.setCheckedDate(newEndDateIdx);
    }
  },

  setCheckedDate: function (idx) {
    var radioButtons = $('input[name="voyage[end_date]"]');
    var newEl = radioButtons.get(idx);
    $(newEl).prop("checked", true);
  },

  selectedIdx: function (dateType) {
    var selector = 'input[name="voyage[' + dateType + ']"]';
    var radioButtons = $(selector);
    return radioButtons.index(radioButtons.filter(':checked'));
  },

  endDateStop: function () {
    return (-112 * this.selectedIdx('start_date')) - 112;
  },

  shiftEndDateIdx: function (diff) {
    this.shift('.end-date-picker', function (leftVal) {
      return leftVal - (112 * (diff + 1));
    }.bind(this));
  },

  firstEndDateIdx: function () {
    var leftValPix = $('.date-picker__date-list.end-date-picker').css('left');
    var leftVal = parseInt(leftValPix.slice(0, -2));
    return Math.abs(leftVal / 112 );
  }
});
