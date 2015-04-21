# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  Voyage.destroy_all
  User.destroy_all
  Sailor.destroy_all

  jack = User.create!(fname: "Jack", lname: "Sparrow", email: "jack@sparrow.com",
              password: "password")

  pintel = Sailor.create!(name: "Pintel", swabbingDecks: 82, manningHelm: 59,
                loadingCannons: 70, task_requirement: "car")

  ragetti = Sailor.create!(name: "Ragetti", swabbingDecks: 75, manningHelm: 42,
                loadingCannons: 65, task_requirement: "truck")

  cotton = Sailor.create!(name: "Cotton", swabbingDecks: 90, manningHelm: 10,
                loadingCannons: 87, task_requirement: "none")

  twigg = Sailor.create!(name: "Twigg", swabbingDecks: 35, manningHelm: 84,
                loadingCannons: 56, task_requirement: "none")

  voyage1 = Voyage.create!(user_id: jack.id, sailor_id: pintel.id,
                          name: "Gold Quest", task_requirement: "car",
                          start_date: Date.new(2015, 04, 11),
                          end_date: Date.new(2015, 04, 13), rating: 5,
                          comment: "It was a surprisingly great service")

  voyage2 = Voyage.create!(user_id: jack.id, sailor_id: ragetti.id,
                            name: "Search for Black Pearl",
                            task_requirement: "truck", rating: 4,
                            comment: "Okay, we didn't make him walk the plank")

  voyage3 = Voyage.create!(user_id: jack.id, sailor_id: cotton.id,
                            name: "Kidnap Will Turner",
                            task_requirement: "none", rating: 3,
                            comment: "Meh, we left him behind enemy lines.
                            There is a code after all.")

  voyage4 = Voyage.create!(user_id: jack.id, sailor_id: pintel.id,
                          name: "Gold Quest", task_requirement: "car",
                          start_date: Date.new(2015, 04, 10),
                          end_date: Date.new(2015, 04, 12), rating: 2,
                          comment: "I will curse him")

  voyage5 = Voyage.create!(user_id: jack.id, sailor_id: pintel.id,
                          name: "Gold Quest", task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "We sent him to the depths of Davy
                          Jones' locker.")
end
