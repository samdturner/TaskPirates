class Sailor < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 40 }

  validates_numericality_of :swabbingDecks, :loadingCannons, :manningHelm,
                            presence: true, only_integer: true,
                            greater_than_or_equal_to: 0,
                            less_than_or_equal_to: 100

  has_many :crew_assignments

  private

    def is_valid_date?
      if !mydate.is_a?(Date)
        errors.add(:mydate, 'must be a valid date')
      end
    end
end
