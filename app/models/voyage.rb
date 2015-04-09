class Voyage < ActiveRecord::Base
  validates :user_id, presence: true

  validate :end_date_after_start_date?

  validates :start_location, :end_location, presence: true,
            length: { maximum: 40 }

  belongs_to :user

  has_many :crew_assignments
  has_many :hired_sailors, through: :crew_assignments, source: :sailor

  def available_sailors
    Sailor.all - self.hired_sailors
  end

  private
  def end_date_after_start_date?
    unless end_date > start_date
      errors[:end_date] << "End date must be after start date"
    end
  end
end
