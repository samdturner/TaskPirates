TaskPirates.Views.VoyageReviewItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
  },

  template: JST['sailor/sailor_review_panel'],

  render: function () {
    var content = this.template({
      voyage: this.model
    });

    this.$el.html(content);
    return this;
  }
});
