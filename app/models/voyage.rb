class Voyage < ActiveRecord::Base
  validates :user_id, presence: true

  belongs_to :user

  belongs_to :sailor

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
        sailors.task_requirement = :voyage_task_requirement
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
  end

  private
  def end_date_after_start_date?
    unless end_date > start_date
      errors[:end_date] << "End date must be after start date"
    end
  end
end
