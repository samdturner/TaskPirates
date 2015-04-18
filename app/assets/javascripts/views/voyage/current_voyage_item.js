TaskPirates.Views.CurrentVoyageItem = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView

    this.listenTo(this.model, 'add', this.render);
  },

  events: {
    'click .cancel-voyage' : 'cancelVoyage',
    "click .btn-submit-review" : "submitReview"
  },

  tagName: 'div',

  template: JST['voyage/current_voyage_item'],

  render: function () {

    var content = this.template({
      voyage: this.model
    });

    this.$el.html(content);
    this.$(".voyage-complete-btn").leanModal({
      top : 200, overlay : 0.4,
      closeButton: ".modal_close",
      voyage: this.model
      });
    return this;
  },

  cancelVoyage: function (event) {
    event.preventDefault();
    this.slideVoyage(event.currentTarget, event.delegateTarget.firstChild);
  },

  slideVoyage: function (cancelBtn, voyageContainer) {
    var that = this;
    $(voyageContainer).transition({
      "margin-left": "-150%",
      "opacity": "0"
    }, 500, function () {
      $(cancelBtn).transition({
        "height": "0px",
        "margin": "-15px 0"
      }, 400, function () {
        $(cancelBtn).hide();
        that.parentView.cancelVoyage(that.model);
      });
    });
  }
});
