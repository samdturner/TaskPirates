class Voyage < ActiveRecord::Base
  validates :user_id, presence: true

  validates_date :start_date

  validates_date :end_date, on_or_after: :start_date

  validates :start_location, :end_location, presence: true,
            length: { maximum: 40 }

  belongs_to :user
end
