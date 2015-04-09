TaskPirates.Views.VoyageNewForm = Backbone.View.extend({
  tagName: 'form',

  template: JST['new_voyage/questions'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
