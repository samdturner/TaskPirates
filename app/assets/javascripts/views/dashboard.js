TaskPirates.Views.Dashboard = Backbone.CompositeView.extend({
  template: [JST["dashboard/dashboard_container"],
            JST["layouts/header_image"],
            JST["layouts/header_dashboard_text"]],

  initialize: function (options) {
    var view = this;

    this.voyages = options.voyages;

    this.listenTo(this.voyages, 'add', this.addIfNotComplete);
    this.listenTo(this.voyages, 'remove', this.removeVoyage);

    this.voyages.each(function (voyage) {
      this.addIfNotComplete(voyage);
    }.bind(this));

    this.addTasks();
  },

  events: {
    "click .btn-submit-review" : "submitReview"
  },

  addIfNotComplete: function (voyage) {
    if(!voyage.get('completed')) {
      this.addVoyage(voyage);
    }
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
    this.subviews('.current-voyages').forEach( function (voyageIndexView) {
      if(voyage.get('id') === voyageIndexView.model.get('id')) {
        this.removeSubview('.voyages', voyageIndexView);
      }
    }.bind(this));
  },

  render: function () {

    var content = this.template[0]();
    this.$el.html(content);

    this.$el.find('.dashboard').prepend(this.template[1]({
      imageType: 'dashboard-image'
    }));

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

  submitReview: function (event) {
    debugger;
    event.preventDefault();
    var voyageId = $(event.currentTarget).data("voyageId");
    var reviewedVoyage = this.voyages.getOrFetch(voyageId);
    var selector = ".feedback-form-" + voyageId;
    var attrs = this.$el.find(selector).serializeJSON();
    reviewedVoyage.set(attrs);
    this.$()
    reviewedVoyage.save({ completed: true }, {
      success: function () {
        debugger;
        this.voyages.remove(reviewedVoyage);
      }.bind(this)
    });
  }
});
