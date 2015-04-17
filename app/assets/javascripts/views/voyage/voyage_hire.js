TaskPirates.Views.VoyageHire = Backbone.CompositeView.extend({
  template: [JST["layouts/header_image"],
            JST["sailor/sailor_hire_panel_container"]],

  initialize: function (options) {
    var view = this;

    this.matchingSailors = options.matchingSailors;

    this.listenTo(this.matchingSailors, 'add', this.addSailor);

    this.matchingSailors.each(function (sailor) {
      this.maybeAddSailor(sailor);
    });
  },

  addSailor: function (sailor) {
    var sailorPanelView = new TaskPirates.Views.SailorHirePanel({
      model: sailor,
      parentView: this
    });
    this.addSubview('.sailors-available', sailorPanelView);
  },

  render: function () {
    var header_image = this.template[0]({
      imageType: 'select-sailor-image'
    });
    this.$el.html(header_image);

    var sailorHirePanelCont = this.template[1]();
    this.$el.append(sailorHirePanelCont);
    this.attachSubviews();
    return this;
  },

  hireSailor: function (sailor) {
    var sailorId = sailor.get('id');
    this.model.set({ sailor_id: sailorId })
    this.model.save({}, {
      success: function () {
        this.model.fetch();
      }.bind(this)
    });
    Backbone.history.navigate("dashboard", { trigger: true });
  }
});
