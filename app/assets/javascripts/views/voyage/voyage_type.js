TaskPirates.Views.VoyageTypesContainer = Backbone.View.extend({
  events: {
    'click .task-box' : 'showForm'
  },

  template: JST['voyage/voyage_types'],

  events: {
    'click a.new-voyage' : 'newVoyage'
  },

  render: function () {
    var tasks = ["Swabbing Decks", "Loading Cannons", "Manning Helm"]
    var content = this.template({
      tasksArr: [["Swabbing decks", "Manning helm"],
                  ["Hoisting sails", "Loading cannons"]]
    });
    this.$el.html(content);
    return this;
  },

  newVoyage: function (event) {
    event.preventDefault();
    var task_type = $(event.currentTarget).data('task-type');
    var newVoyage = new TaskPirates.Models.Voyage();
    newVoyage.save({ task_type: task_type }, {
        success: function () {
          var url = "voyages/" + newVoyage.get('id') +"/edit";
          Backbone.history.navigate(url, { trigger: true });
        }
    });
  }
});
