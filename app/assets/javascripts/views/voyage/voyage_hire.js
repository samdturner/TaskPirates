TaskPirates.Views.VoyageHire = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.matchSailors = options.matchSailors;

    this.listenTo(this.matchSailors, 'add', this.maybeAddSailor);

    this.matchSailors.each(function (sailor) {
      if(!this.match(sailor)) {
        sailor.remove();
      }
    });

    this.matchSailors.each(function (sailor) {
      this.maybeAddSailor(sailor);
    });
  },

  maybeAddSailor: function (sailor) {
    debugger
    if(this.match(sailor)) {
      this.addSailor(sailor);
    }
  },

  match: function (sailor) {
    if(sailor.get('task_requirement') !==
            this.model.get('task_requirement')) {
      return false;
    }
    return true;
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
    debugger
    var sailorId = sailor.get('id');
    this.model.set({ sailor_id: sailorId })
    this.model.save();
  }
});
