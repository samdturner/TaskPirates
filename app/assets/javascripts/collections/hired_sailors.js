TaskPirates.Collections.HiredSailors = Backbone.Collection.extend({
  url: 'api/hired_sailors',

  model: TaskPirates.Models.Sailor,

  getOrFetch: function (id) {
    var sailor = this.get(id);

    if (!sailor) {
      sailor = new TaskPirates.Models.Sailor({ id: id });
      sailor.fetch({
        success: function () {
          this.add(sailor);
        }.bind(this)
      });
    } else {
      sailor.fetch();
    }

    return sailor;
  }
});
