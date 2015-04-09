TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.sailors = options.sailors;
    this.voyages = options.voyages;
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'sailorIndex'
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

  _swapViews: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
