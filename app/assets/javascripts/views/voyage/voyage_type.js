TaskPirates.Views.VoyageTypes = Backbone.View.extend({
  events: {
    'click .task-box' : 'showForm'
  },

  template: JST['voyage/voyage_types'],

  render: function () {
    var tasks = ["Swabbing Decks", "Loading Cannons", "Manning Helm"]
    var content = this.template({
      tasks: tasks
    });

    this.$el.html(content);
    return this;
  },

  showForm: function () {

  }
});
