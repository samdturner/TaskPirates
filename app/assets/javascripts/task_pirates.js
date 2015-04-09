window.TaskPirates = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var sailors = new TaskPirates.Collections.Sailors();
    var voyages = new TaskPirates.Collections.Voyages();

    var router = new TaskPirates.Routers.Router({
      sailors: sailors,
      voyages: voyages
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TaskPirates.initialize();
});
