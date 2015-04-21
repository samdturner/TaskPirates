TaskPirates.Models.Sailor = Backbone.Model.extend({
  urlRoot: 'api/sailors',

  parse: function (response) {
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
  },

  user: function (voyage) {
    if (!voyage._user) {
      voyage._user = new TaskPirates.Models.User();
    }

    return voyage._user;
  }
});
