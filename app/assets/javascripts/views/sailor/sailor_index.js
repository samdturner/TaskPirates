TaskPirates.Views.SailorIndex = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.availableSailors = options.availableSailors;
    this.hiredSailors = options.hiredSailors;
    this.crewAssignments = options.crewAssignments;
    this.listenTo(this.availableSailors, 'add', this.addSailor);
    this.listenTo(this.hiredSailors, 'add', this.addSailor);

    var sailorsArr = [this.availableSailors, this.hiredSailors];
    var available = true
    _.each(sailorsArr, function (sailors) {
      _.each(sailors.models, function (sailor) {
        view.addSailor(sailor, available);
      });
      available = false;
    });
  },

  addSailor: function (sailor, available) {
    var sailorItemView = new TaskPirates.Views.SailorIndexItem({
      available: available,
      model: sailor
    });
    this.addSubview('.sailors', sailorItemView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  fireSailor: function (sailor) {
    var sailorId = sailor.get('id');
    var selectedCrewAssign = this.crewAssignments.find(function(model) {
      return model.get('sailor_id') == sailorId;
      })
    selectedCrewAssign.destroy({
      success: function () {
        this.hiredSailors.remove(sailor);
        this.availableSailors.add(sailor)
      }.bind(this)
    });
  },

  hireSailor: function (sailor) {
    var sailorId = sailor.get('id');
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
  }
});
