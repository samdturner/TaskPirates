TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.sailors = options.sailors;
    this.voyages = options.voyages;
    this.$rootEl = $('#main');
  },

  routes: {
    'dashboard' : 'dashboard',
    'voyages/:id/edit' : 'voyageForm',
    'voyages/:id/hire' : 'voyageHire',
    'sailors/:id' :'sailorProfile'
  },

  sailorProfile: function (id) {
    var voyages = this.voyages.fetch();
    var sailor = this.sailors.getOrFetch(id);
    var sailorProfileView = new TaskPirates.Views.SailorProfile ({
      model: sailor
    });
    this._swapViews(sailorProfileView);
  },

  dashboard: function (id) {
    this.voyages.fetch();
    var dashboardView = new TaskPirates.Views.Dashboard({
      voyages: this.voyages
    });
    this._swapViews(dashboardView);
  },

  voyageForm: function (id) {
    var newVoyage = this.voyages.getOrFetch(id);
    var voyageNewFormView = new TaskPirates.Views.VoyageNewForm({
      model: newVoyage,
      collection: this.voyages
    });
    this._swapViews(voyageNewFormView);
  },

  voyageHire: function (id) {
    var hireVoyage = this.voyages.getOrFetch(id);
    hireVoyage.matchingSailors().fetch();
    var hireVoyageView = new TaskPirates.Views.VoyageHire({
      model: hireVoyage,
      matchingSailors: hireVoyage.matchingSailors(),
    });
    this._swapViews(hireVoyageView);
  },

  _swapViews: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
