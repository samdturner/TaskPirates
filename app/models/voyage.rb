class Voyage < ActiveRecord::Base
  validates :user_id, presence: true

  validate :end_date_after_start_date?

  validates :start_location, :end_location, presence: true,
            length: { maximum: 40 }

  belongs_to :user

  has_many :crew_assignments

  def available_sailors
    avail_sailors = []
    sailors = Sailor.all
    sailors.each do |sailor|
      unless CrewAssignment.find_by(sailor_id: sailor.id)
        avail_sailors << sailor
      end
    end

    avail_sailors
  end

  def hired_sailors
    Sailor.all - self.available_sailors
  end

  private
  def end_date_after_start_date?
    unless end_date > start_date
      errors[:end_date] << "End date must be after start date"
    end
  end
end
