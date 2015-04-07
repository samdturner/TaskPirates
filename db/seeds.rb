# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(fname: "Jack", lname: "Sparrow", email: "jack@sparrow.com",
            password: "password")

Voyage.create(user_id: 1, start_date: DateTime.new(1800,06,20),
              end_date: DateTime.new(1800,07,20), start_location: "Here",
              end_location: "Unknown")

Sailor.create(name: "Pintel", swabbingDecks: 82, manningHelm: 59,
              loadingCannons: 70)

Sailor.create(name: "Ragetti", swabbingDecks: 75, manningHelm: 42,
              loadingCannons: 65)

Sailor.create(name: "Cotton", swabbingDecks: 90, manningHelm: 10,
              loadingCannons: 87)
