TaskPirates.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.hiredSailors = options.hiredSailors;
    this.availableSailors = options.availableSailors;
    this.crewAssignments = options.crewAssignments;
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'sailorIndex'
  },

  sailorIndex: function (id) {
    this.hiredSailors.fetch();
    this.availableSailors.fetch();
    var sailorIndexView = new TaskPirates.Views.SailorIndex({
      hiredSailors: this.hiredSailors,
      availableSailors: this.availableSailors,
      crewAssignments: this.crewAssignments
    });
    this._swapViews(sailorIndexView);
  },

  _swapViews: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
