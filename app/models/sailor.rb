class Sailor < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 40 }

  validates_numericality_of :swabbingDecks, :loadingCannons, :manningHelm,
                            presence: true, only_integer: true,
                            greater_than_or_equal_to: 0,
                            less_than_or_equal_to: 100

  has_many :voyages
end
