TaskPirates.Views.SailorIndex = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.voyages = options.voyages;

    this.listenTo(this.voyages, 'add', this.addVoyage);
    this.listenTo(this.voyages, 'remove', this.removeVoyage);

    this.voyages.each(function (voyage) {
      this.addVoyage(voyage);
    });

    this.addTasks();
  },

  addVoyage: function (voyage) {
    var voyageItemView = new TaskPirates.Views.VoyageIndexItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.current-voyages', voyageItemView);
  },

  addTasks: function () {
    var tasksView = new TaskPirates.Views.VoyageTypes();
    this.addSubview('.sidebar-tasks', tasksView);
  },

  removeVoyage: function (voyage) {
    this.subviews('.voyages').forEach( function (voyageIndexView) {
      if(voyage.get('id') === voyageIndexView.model.get('id')) {
        this.removeSubview('.voyages', voyageIndexView);
      }
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  cancelVoyage: function (voyage) {
    voyage.destroy({
      success: function () {
        this.voyages.remove(voyage);
      }.bind(this)
    });
  },
});
