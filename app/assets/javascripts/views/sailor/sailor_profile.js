TaskPirates.Views.SailorProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.sailorVoyages = options.model.voyages();
    this.voyage = options.voyage;

    this.listenTo(this.sailorVoyages, 'add', this.addIfComplete);
    this.listenTo(this.model, 'sync', this.render);

    _.each(this.sailorVoyages.models, function (voyage) {
      this.addIfComplete(voyage);
    }.bind(this));
  },

  template: [JST['sailor/sailor_profile_container']],

  events: {
    'click .tasker-hire-btn' : 'hireSailor',
    'click .btn-submit-review' : 'navigateToDashboard'
  },

  render: function () {
    var content = this.template[0]({
      sailor: this.model,
      voyage: this.voyage
    });

    this.$el.html(content);
    this.attachSubviews();
    this.$(".tasker-hire-btn").leanModal({
      top : 200,
      overlay : 0.4,
      closeButton : ".modal_close"
    });
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
  },

  hireSailor: function (sailor) {
    var sailorId = this.model.get('id');
    this.voyage.set({ sailor_id: sailorId })
    this.voyage.save({});
  },

  navigateToDashboard: function (event) {
    event.preventDefault();
    Backbone.history.navigate("dashboard", { trigger: true });
  }
});
