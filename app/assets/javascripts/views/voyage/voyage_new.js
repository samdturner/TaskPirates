TaskPirates.Views.VoyageNewForm = Backbone.View.extend({
  tagName: 'form',

  template: JST['new_voyage/questions'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
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
    this.model.save({}, {
      success: function () {
        this.collection.add(this.collection);
      }.bind(this)
    });
  },

  findSailors: function (event) {
    event.preventDefault();
    this.saveResponse(event);
    var fragment = "voyages/" + this.model.get('id') + "/hire"
    Backbone.history.navigate(fragment, { trigger: true });
  }
});
