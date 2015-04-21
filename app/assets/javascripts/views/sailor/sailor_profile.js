TaskPirates.Views.SailorProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.sailorVoyages = options.model.voyages();

    this.listenTo(this.sailorVoyages, 'add', this.addIfComplete);
    this.listenTo(this.model, 'sync', this.render);

    _.each(this.sailorVoyages.models, function (voyage) {
      this.addIfComplete(voyage);
    }.bind(this));
  },

  template: [JST['sailor/sailor_profile_container']],

  render: function () {
    var content = this.template[0]({
      sailor: this.model
    });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addIfComplete: function (voyage) {
    if(!voyage.get('complete')) {
      this.addVoyage(voyage);
    }
  },

  addVoyage: function (voyage) {
    var voyageReviewItem = new TaskPirates.Views.VoyageReviewItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.rabbit-reviews', voyageReviewItem);
  }
});
