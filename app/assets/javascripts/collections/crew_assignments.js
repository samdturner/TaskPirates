TaskPirates.Collections.CrewAssignments = Backbone.Collection.extend({
  url: 'api/crew_assignments',

  model: TaskPirates.Models.CrewAssignment
});
