TaskPirates.Views.SailorHirePanel = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView
  },

  events: {
    'click .tasker-hire-btn' : 'hireSailor',
    'click .tasker-avatar' : 'viewProfile',
    'click .tasker-display-name' : 'viewProfile',
    'click .reviews-link' : 'viewProfile'
  },

  tagName: 'div',

  template: JST['sailor/sailor_hire_panel'],

  render: function () {
    var content = this.template({
      sailor: this.model
    });
    this.$el.html(content);
    this.$(".tasker-hire-btn").leanModal({
      top : 200,
      overlay : 0.4,
      closeButton : ".modal_close"
    });
    return this;
  },

  hireSailor: function (event) {
    event.preventDefault();
    this.parentView.hireSailor(this.model);
  },

  viewProfile: function () {
    var fragment = 'sailors/' + this.model.get('id');
    Backbone.history.navigate(fragment, { trigger: true });
  }
});
