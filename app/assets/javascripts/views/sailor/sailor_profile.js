TaskPirates.Views.SailorProfile = Backbone.View.extend({
  events: {
    'click .hire-btn' : 'hireSailor'
  },

  tagName: 'ul',

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
