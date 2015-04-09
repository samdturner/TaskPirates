TaskPirates.Views.SailorIndex = Backbone.CompositeView.extend({
  template: JST["sailor/index"],

  initialize: function (options) {
    var view = this;

    this.sailors = options.sailors;
    this.voyages = options.voyages;

    this.listenTo(this.sailors, 'add', this.addSailor);
    this.listenTo(this.voyages, 'add', this.addVoyage);
    this.listenTo(this.voyages, 'remove', this.removeVoyage);

    this.sailors.each(function (sailor) {
      this.addSailor(sailor);
    });

    this.voyages.each(function (voyage) {
      this.addVoyage(voyage);
    });
  },

  addSailor: function (sailor) {
    var sailorItemView = new TaskPirates.Views.SailorIndexItem({
      model: sailor,
      parentView: this
    });
    this.addSubview('.sailors-available', sailorItemView);
  },

  addVoyage: function (voyage) {
    var voyageItemView = new TaskPirates.Views.VoyageIndexItem({
      model: voyage,
      parentView: this
    });
    this.addSubview('.voyages', voyageItemView);
  },

  removeVoyage: function (voyage) {
    this.subviews('.voyages').forEach( function (voyageIndexView) {
      if(voyage.get('id') === voyageIndexView.model.get('id')) {
        this.removeSubview('.voyages', voyageIndexView);
      }
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  cancelVoyage: function (voyage) {
    voyage.destroy({
      success: function () {
        this.voyages.remove(voyage);
      }.bind(this)
    });
  },

  hireSailor: function (sailor) {
    var sailorId = sailor.get('id');
    var params = {
      sailor_id: sailorId,
    };
    var newVoyage = new TaskPirates.Models.Voyage(params);
    newVoyage.save({}, {
      success: function () {
        this.voyages.add(newVoyage);
      }.bind(this)
    });
  }
});
