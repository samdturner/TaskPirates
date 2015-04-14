TaskPirates.Views.Dashboard = Backbone.CompositeView.extend({
  template: [JST["dashboard/dashboard_container"],
            JST["layouts/header_image"],
            JST["layouts/header_dashboard_text"]],

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
    var currentVoyageItemView = new TaskPirates.Views.CurrentVoyageItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.current-voyages', currentVoyageItemView);
  },

  addTasks: function () {
    var tasksView = new TaskPirates.Views.VoyageTypesContainer();
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

    var content = this.template[0]();
    this.$el.html(content);
    this.$el.find('.dashboard').prepend(this.template[1]());
    this.$el.find('div.section-salute').append(this.template[2]());
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
