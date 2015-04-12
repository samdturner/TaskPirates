TaskPirates.Views.SailorIndexItem = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView
  },

  events: {
    'click .hire-btn' : 'hireSailor'
  },

  tagName: 'div',

  template: JST['sailor/sailors_index'],

  render: function () {
    var content = this.template({
      sailor: this.model
    });

    this.$el.html(content);
    return this;
  },

  hireSailor: function (event) {
    event.preventDefault();
    this.parentView.hireSailor(this.model);
  }
});
