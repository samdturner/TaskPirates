TaskPirates.Collections.Voyages = Backbone.Collection.extend({
  url: 'api/voyages',

  model: TaskPirates.Models.Voyage,

  getOrFetch: function (id) {
    var voyage = this.get(id);

    if (!voyage) {
      voyage = new TaskPirates.Models.Voyage({ id: id });
      voyage.fetch({
        success: function () {
          this.add(voyage);
        }.bind(this)
      });
    } else {
      voyage.fetch();
    }

    return voyage;
  }
});
