TaskPirates.Models.Voyage = Backbone.Model.extend({
  urlRoot: 'api/voyages',

  parse: function (response) {
    if (response.sailor) {
      this.sailor().set(response.sailor);
      delete response.sailor;
    }

    if (response.matching_sailors) {
      this.matchingSailors().set(response.matching_sailors);
      delete response.matching_sailor;
    }

    return response;
  },

  sailor: function () {
    if (!this._sailor) {
      this._sailor = new TaskPirates.Models.Sailor();
    }

    return this._sailor;
  },

  matchingSailors: function () {
    if (!this._matching_sailors) {
      this._matching_sailors = new TaskPirates.Collections.Sailors();
      this._matching_sailors.url = "/api/voyages/" + this.id + "/matching_sailors";
    }

    return this._matching_sailors;
  }

});
