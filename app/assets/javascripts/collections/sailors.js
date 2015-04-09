TaskPirates.Collections.Sailors = Backbone.Collection.extend({
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

TaskPirates.Collections.AvailableSailors = TaskPirates.Collections.Sailors.extend({
  url: 'api/available_sailors',
});

TaskPirates.Collections.HiredSailors = TaskPirates.Collections.Sailors.extend({
  url: 'api/hired_sailors',
});
