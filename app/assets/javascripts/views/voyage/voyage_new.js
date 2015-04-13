TaskPirates.Views.VoyageNewForm = Backbone.View.extend({
  tagName: 'div',

  template: [JST['new_voyage/questions'], JST['layouts/header']],

  render: function () {
    this.$el.html(this.template[1]());
    var content = this.template[0]();
    this.$el.append(content);
    return this;
  },

  events: {
    'click button.btn-advance-step' : 'saveResponse',
    'click button.find-sailors' : 'findSailors'
  },

  saveResponse: function (event) {
    event.preventDefault();
    var attrs = this.$(':input').serializeJSON();

    this.model.set(attrs);
    this.model.save();
  },

  findSailors: function (event) {
    event.preventDefault();
    this.saveResponse(event);
    var fragment = "voyages/" + this.model.get('id') + "/hire"
    Backbone.history.navigate(fragment, { trigger: true });
  }
});
