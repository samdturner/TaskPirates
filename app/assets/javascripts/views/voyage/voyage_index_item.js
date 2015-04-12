TaskPirates.Views.VoyageIndexItem = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView
  },

  events: {
    'click .cancel-btn' : 'cancelVoyage'
  },

  tagName: 'div',

  template: JST['voyage/voyages_index'],

  render: function () {
    var content = this.template({
      voyage: this.model
    });

    this.$el.html(content);
    return this;
  },

  cancelVoyage: function (event) {
    event.preventDefault();
    this.parentView.cancelVoyage(this.model);
  }
});
