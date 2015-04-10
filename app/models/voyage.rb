class Voyage < ActiveRecord::Base
  validates :user_id, presence: true

  # validate :end_date_after_start_date?

  belongs_to :user

  belongs_to :sailor

  private
  def end_date_after_start_date?
    unless end_date > start_date
      errors[:end_date] << "End date must be after start date"
    end
  end
end
