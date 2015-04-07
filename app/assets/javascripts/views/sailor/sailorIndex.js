TaskPirates.Views.SailorIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    'click button.hire-btn' : 'hireSailor'
  },

  tagName: 'ul',

  template: JST['sailor/sailor_index'],

  render: function () {
    var content = this.template({ sailors: this.collection });
    this.$el.html(content);
    return this;
  },

  hireSailor: function () {
    event.preventDefault();

    var sailorId = $('li.sailor-name').attr('data-id');
    var params = {
      sailor_id: sailorId,
    };
    var newCrewAssign = new TaskPirates.Models.CrewAssignment(params);
    newCrewAssign.save();
  }
});
