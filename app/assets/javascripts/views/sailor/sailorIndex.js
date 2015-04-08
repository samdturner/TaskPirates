TaskPirates.Views.SailorIndex = Backbone.View.extend({
  initialize: function (options) {
    this.hiredSailors = options.hiredSailors;
    this.availableSailors = options.availableSailors;
    this.crewAssignments = options.crewAssignments;
    this.listenTo(this.availableSailors, 'add sync remove', this.render);
    this.listenTo(this.hiredSailors, 'add sync remove', this.render);
  },

  events: {
    'click button.hire-btn' : 'hireSailor',
    'click button.fire-btn' : 'fireSailor'
  },

  tagName: 'ul',

  template: JST['sailor/sailor_index'],

  render: function () {
    var content = this.template({
      availableSailors: this.availableSailors,
      hiredSailors: this.hiredSailors
    });
    this.$el.html(content);
    return this;
  },

  hireSailor: function (event) {
    event.preventDefault();


    var sailorId = $(event.currentTarget).attr('data-id');
    var params = {
      sailor_id: sailorId,
    };
    var newCrewAssign = new TaskPirates.Models.CrewAssignment(params);
    this.crewAssignments.add(newCrewAssign);
    var sailor = this.availableSailors.get(sailorId);
    newCrewAssign.save({}, {
      success: function () {
        this.availableSailors.remove(sailor);
        this.hiredSailors.add(sailor)
      }.bind(this)
    });
  },

  fireSailor: function (event) {
    event.preventDefault();

    var sailorId = $(event.currentTarget).data('id');

    var sailor = this.hiredSailors.get(sailorId);
    var selectedCrewAssign = this.crewAssignments.find(function(model) {
      return model.get('sailor_id') == sailorId;
      })
    selectedCrewAssign.destroy({
      success: function () {
        this.hiredSailors.remove(sailor);
        this.availableSailors.add(sailor)
      }.bind(this)
    });
  }
});
