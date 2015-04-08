TaskPirates.Views.SailorIndexItem = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView
    this.available = options.available
  },

  events: {
    'click button.fire-btn' : 'fireSailor',
    'click button.hire-btn' : 'hireSailor'
  },

  tagName: 'ul',

  template: JST['sailor/sailors_index'],

  render: function () {
    if(this.available) {
      var btn_type = "btn-default"
      var btn_name = "hire-btn"
      var btn_label = "Hire"
    } else {
      var btn_type = "btn-danger"
      var btn_name = "fire-btn"
      var btn_label = "Fire"
    }

    var content = this.template({
      sailor: this.model,
      btn_type: btn_type,
      btn_name: btn_name,
      btn_label: btn_label
    });

    this.$el.html(content);
    return this;
  },

  fireSailor: function (event) {
    event.preventDefault();
    this.parentView.fireSailor(this.model);
  },

  hireSailor: function (event) {
    event.preventDefault();
    this.parentView.hireSailor(this.model);
  }
});
