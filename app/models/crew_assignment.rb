class CrewAssignment < ActiveRecord::Base
  validates :sailor_id, :voyage_id, presence: true

  belongs_to :sailor  
  belongs_to :voyage
end
