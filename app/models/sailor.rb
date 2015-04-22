class Sailor < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 40 }

  has_many :voyages

  def overlapping_voyages?(new_voyage)
    voyages = self.voyages

    voyages.each do |voyage|
      unless new_voyage.start_date > voyage.end_date ||
             new_voyage.end_date < voyage.start_date
        return true
      end
    end

    false
  end
end
