TaskPirates.Views.SailorIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  tagName: 'ul',

  template: JST['sailor/sailor_index'],

  render: function () {
    var content = this.template({ sailors: this.collection });
    this.$el.html(content);
    return this;
  }
});
