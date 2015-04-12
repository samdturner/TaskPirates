TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.sailors = options.sailors;
    this.voyages = options.voyages;
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'sailorIndex',
    'voyages/:id/edit' : 'voyageForm',
    'voyages/:id/hire' : 'voyageHire',
    'sailors/:id' :'sailorProfile'
  },

  sailorProfile: function (id) {
    var sailor = this.sailors.getOrFetch(id);
    var sailorProfileView = new TaskPirates.Views.SailorProfile ({
      model: sailor
    });
    this._swapViews(sailorProfileView);
  },

  sailorIndex: function (id) {
    this.voyages.fetch();
    var sailorIndexView = new TaskPirates.Views.SailorIndex({
      voyages: this.voyages
    });
    this._swapViews(sailorIndexView);
  },

  voyageForm: function (id) {
    var newVoyage = this.voyages.getOrFetch(id);
    var voyageNewView = new TaskPirates.Views.VoyageNewForm({
      model: newVoyage,
      collection: this.voyages
    });
    this._swapViews(voyageNewView);
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
