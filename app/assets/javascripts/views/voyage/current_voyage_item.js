TaskPirates.Views.CurrentVoyageItem = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView

    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .cancel-voyage' : 'cancelVoyage',
  },

  tagName: 'div',

  template: JST['voyage/current_voyage_item'],

  render: function () {
    var content = this.template({
      voyage: this.model
    });

    this.$el.html(content);
    this.$(".voyage-complete-btn").leanModal({
      top : 200, overlay : 0.4,
      closeButton: ".modal_close"
      });
    return this;
  },

  cancelVoyage: function (event) {
    event.preventDefault();
    this.parentView.cancelVoyage(this.model);
  }
});
