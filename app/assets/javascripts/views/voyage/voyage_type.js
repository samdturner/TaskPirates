TaskPirates.Views.VoyageTypes = Backbone.View.extend({
  events: {
    'click .task-box' : 'showForm'
  },

  template: JST['voyage/voyage_types'],

  events: {
    'click button.btn-new-voyage' : 'newVoyage'
  },

  render: function () {
    var tasks = ["Swabbing Decks", "Loading Cannons", "Manning Helm"]
    var content = this.template({
      tasks: tasks
    });

    this.$el.html(content);
    return this;
  },

  newVoyage: function (event) {
    debugger
    event.preventDefault();
    var task_type = $(event.currentTarget).data('task-type');
    var newVoyage = new TaskPirates.Models.Voyage();
    newVoyage.save({ task_type: task_type }, {
        success: function () {
          debugger
          var url = "voyages/" + newVoyage.get('id') +"/edit";
          Backbone.history.navigate(url, { trigger: true });
        }
    });
  }
});
