TaskPirates.Views.VoyageReviewItem = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'add', this.render);

    this.rndUserData = $.ajax({
        url: 'http://api.randomuser.me/',
        dataType: 'json',
        success: function () {
          var imgUrl = arguments[0].results[0].user.picture.thumbnail;
          this.render(imgUrl);
        }.bind(this)
    });
  },

  template: JST['sailor/sailor_review_panel'],

  render: function (imgUrl) {
    var content = this.template({
      voyage: this.model,
      imgUrl: imgUrl
    });

    this.$el.html(content);
    return this;
  }
});
