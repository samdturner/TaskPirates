TaskPirates.Models.Voyage = Backbone.Model.extend({
  urlRoot: 'api/voyages',

  parse: function (response) {
    if (response.sailor) {
      this.sailor().set(response.sailor);
      delete response.sailor;
    }

    return response;
  },

  sailor: function () {
    if (!this._sailor) {
      this._sailor = new TaskPirates.Models.Sailor();
    }

    return this._sailor;
  }

});
