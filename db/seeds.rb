# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do

  jack = User.create!(fname: "Jack", lname: "Sparrow", email: "jack@sparrow.com",
              password: "password")

  pintel = Sailor.create!(name: "Pintel", swabbingDecks: 82, manningHelm: 59,
                loadingCannons: 70)

  ragetti = Sailor.create!(name: "Ragetti", swabbingDecks: 75, manningHelm: 42,
                loadingCannons: 65)

  cotton = Sailor.create!(name: "Cotton", swabbingDecks: 90, manningHelm: 10,
                loadingCannons: 87)

  twigg = Sailor.create!(name: "Twigg", swabbingDecks: 35, manningHelm: 84,
                loadingCannons: 56)

  voyage1 = Voyage.create!(user_id: jack.id, sailor_id: pintel.id, name: "Gold Quest")
  voyage2 = Voyage.create!(user_id: jack.id, sailor_id: ragetti.id, name: "Search for Black Pearl")
  voyage3 = Voyage.create!(user_id: jack.id, sailor_id: cotton.id, name: "Kidnap Will Turner")
end
