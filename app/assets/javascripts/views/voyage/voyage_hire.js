TaskPirates.Views.VoyageHire = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.matchingSailors = options.matchingSailors;

    this.listenTo(this.matchingSailors, 'add', this.addSailor);

    this.matchingSailors.each(function (sailor) {
      this.maybeAddSailor(sailor);
    });
  },

  addSailor: function (sailor) {
    var sailorItemView = new TaskPirates.Views.SailorIndexItem({
      model: sailor,
      parentView: this
    });
    this.addSubview('.sailors-available', sailorItemView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  hireSailor: function (sailor) {
    var sailorId = sailor.get('id');
    this.model.set({ sailor_id: sailorId })
    this.model.save();
  }
});
