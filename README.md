TaskPirates is built on a Rails backend with Backbone serving as the responsive front end.  Inspired by TaskRabbit, users can search for pirates for their next voyage by answering simple questions.  Users can hire pirates and leave reviews and comments following the completion of the voyage.

View it live: http://www.taskpirates.com

###Technical Challenges:
Increased the backend efficiency by implementing a custom SQL query which eliminated an n + 1 query.  The query returns the sailors that match the criteria that the user specifies (task requirement and availability).

```
# app/models/voyage.rb

  def matching_sailors
    binds = { voyage_id: self.id,
              voyage_task_requirement: self.task_requirement,
              voyage_start_date: self.start_date,
              voyage_end_date: self.end_date }
    Sailor.find_by_sql([<<-SQL, binds])
      SELECT DISTINCT
        sailors.*
      FROM
        sailors
      WHERE
        sailors.task_requirement <> :voyage_task_requirement
        AND
        sailors.id NOT IN
        (
        SELECT DISTINCT
          sailors.id
        FROM
          sailors
        JOIN
          voyages ON voyages.sailor_id = sailors.id
        WHERE
          NOT
          (:voyage_end_date < voyages.start_date
          OR
          :voyage_start_date > voyages.end_date
          OR
          :voyage_id = voyages.id
          OR
          voyages.completed = true)
        )
    SQL
```

Implemented a custom Backbone.js model#parse method to retrieve data nested in a JSON object.  The voyage JSON object is returned by the API with a nested sailor object.  The parse method uses the nested sailor object to create a backbone model object on the top level of the voyage JSON object, and then deletes the nested sailor object.
```
# app/assets/javascripts/models/voyage.js

parse: function (response) {
  if (response.sailor) {
    this.sailor().set(response.sailor);
    delete response.sailor;
    this.trigger('sync');
  } else if (response.matching_sailors) {
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
}
```
