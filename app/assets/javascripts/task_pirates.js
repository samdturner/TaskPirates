window.TaskPirates = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var sailors = new TaskPirates.Collections.Sailors();

    var router = new TaskPirates.Routers.Router({
      sailors: sailors
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TaskPirates.initialize();
});
