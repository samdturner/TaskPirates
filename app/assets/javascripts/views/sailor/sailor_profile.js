TaskPirates.Views.SailorProfile = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .hire-btn' : 'hireSailor'
  },

  tagName: 'ul',

  template: JST['sailor/sailor_profile'],

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
