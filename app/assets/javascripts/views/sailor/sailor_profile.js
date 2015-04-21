TaskPirates.Views.SailorProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.voyages = options.voyages;

    this.listenTo(this.voyages, 'add', this.addVoyage);

    this.voyages.each(function (voyage) {
      this.addVoyage(voyage);
    }.bind(this));
  },

  template: [JST['sailor/sailor_profile_container']],

  render: function () {
    var content = this.template[0]({
      sailor: this.model
    });

    this.$el.html(content);
    return this;
  },

  addVoyage: function (voyage) {
    var voyageReviewItem = new TaskPirates.Views.VoyageReviewItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.rabbit-reviews', voyageReviewItem);
  }
});
