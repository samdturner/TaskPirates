window.TaskPirates = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var voyage = new TaskPirates.Models.Voyage();
    voyage.fetch();

    var hiredSailors = new TaskPirates.Collections.HiredSailors();
    var availableSailors = new TaskPirates.Collections.AvailableSailors();

    var crewAssignments = new TaskPirates.Collections.CrewAssignments();
    crewAssignments.fetch();

    var router = new TaskPirates.Routers.Router({
      hiredSailors: hiredSailors,
      availableSailors: availableSailors,
      crewAssignments: crewAssignments
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TaskPirates.initialize();
});
