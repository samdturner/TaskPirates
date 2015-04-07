TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.sailors = options.sailors;
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'sailorIndex'
  },

  sailorIndex: function () {
    this.sailors.fetch();
    var indexView = new TaskPirates.Views.SailorIndex({
      collection: this.sailors
    });
    this._swapViews(indexView);
  },

  _swapViews: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
