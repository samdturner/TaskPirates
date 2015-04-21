TaskPirates.Models.Sailor = Backbone.Model.extend({
  urlRoot: 'api/sailors',

  parse: function (response) {
    debugger
    if (response.voyages) {
      this.voyages().set(response.voyages);
      delete response.voyages;
    }

    return response;
  },

  voyages: function () {
    if (!this._voyages) {
      this._voyages = new TaskPirates.Collections.Voyages();
    }

    return this._voyages;
  }
});
