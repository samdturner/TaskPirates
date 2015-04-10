TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.sailors = options.sailors;
    this.voyages = options.voyages;
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'sailorIndex',
    'voyages/new' : 'voyageNew',
    'voyages/:id/hire' : 'voyageHire'
  },

  sailorIndex: function (id) {
    this.sailors.fetch();
    this.voyages.fetch();
    var sailorIndexView = new TaskPirates.Views.SailorIndex({
      sailors: this.sailors,
      voyages: this.voyages
    });
    this._swapViews(sailorIndexView);
  },

  voyageNew: function () {
    var newVoyage = new TaskPirates.Models.Voyage();
    var voyageNewView = new TaskPirates.Views.VoyageNewForm({
      model: newVoyage,
      collection: this.voyages
    });
    this._swapViews(voyageNewView);
  },

  voyageHire: function (id) {
    debugger;
    var hireVoyage = this.voyages.getOrFetch(id);
    var matchSailors = new TaskPirates.Collections.Sailors();
    matchSailors.fetch();
    var hireVoyageView = new TaskPirates.Views.VoyageHire({
      model: hireVoyage,
      matchSailors: matchSailors,
    });
    this._swapViews(hireVoyageView);
  },

  _swapViews: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
