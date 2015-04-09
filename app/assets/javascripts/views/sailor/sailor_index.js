TaskPirates.Views.SailorIndex = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.availableSailors = options.availableSailors;
    this.hiredSailors = options.hiredSailors;
    this.crewAssignments = options.crewAssignments;
    this.listenTo(this.availableSailors, 'add', this.addAvailableSailor);
    this.listenTo(this.hiredSailors, 'add', this.addHiredSailor);
    this.listenTo(this.availableSailors, 'remove', this.removeAvailableSailor);
    this.listenTo(this.hiredSailors, 'remove', this.removeHiredSailor);

    var sailorsArr = [this.availableSailors, this.hiredSailors];
    var available = true;
    _.each(sailorsArr, function (sailors) {
      _.each(sailors.models, function (sailor) {
        view.addSailor(sailor, available);
      });
      available = false;
    });
  },

  addSailor: function (sailor, available, selector) {
    var sailorItemView = new TaskPirates.Views.SailorIndexItem({
      available: available,
      model: sailor,
      parentView: this
    });
    this.addSubview(selector, sailorItemView);
  },

  addAvailableSailor: function (sailor) {
    this.addSailor(sailor, true, '.sailors-available');
  },

  addHiredSailor: function (sailor) {
    this.addSailor(sailor, false, '.sailors-hired');
  },

  removeSailor: function (selector, sailor) {
    this.subviews(selector).forEach( function (sailorIndexItem) {
      if(sailor.get('id') === sailorIndexItem.model.get('id')) {
        this.removeSubview(selector, sailorIndexItem);
      }
    }.bind(this));
  },

  removeAvailableSailor: function (sailor) {
    this.removeSailor('.sailors-available', sailor)
  },

  removeHiredSailor: function (sailor) {
    this.removeSailor('.sailors-hired', sailor)
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
        this.availableSailors.add(sailor);
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
