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


  jack = User.create!(fname: "Jack", lname: "Sparrow",
                    email: "jack@sparrow.com", password: "password",
                    image_url: "http://api.randomuser.me/portraits/thumb/men/1.jpg")

  male_names = ["John", "Chris", "Joshua", "Kevin", "Eric"]
  female_names = ["Kaylee", "Nicole", "Sarah", "Christina", "Marisa"]
  users = []

  5.times do |n|
    users << User.create!(fname: male_names[n], lname: Faker::Name.last_name,
                          email: Faker::Internet.email, password: "password",
                          image_url: "http://api.randomuser.me/portraits/thumb/men/#{n + 2}.jpg")

    users << User.create!(fname: female_names[n], lname: Faker::Name.last_name,
                          email: Faker::Internet.email, password: "password",
                          image_url: "http://api.randomuser.me/portraits/thumb/women/#{n + 2}.jpg")
  end

  davy_jones = Sailor.create!(name: "Davy Jones",
                    task_requirement: "car",
                    image_url: "http://i.imgur.com/OdFNk9e.png?1")

  ragetti = Sailor.create!(name: "Ragetti", task_requirement: "truck",
                          image_url: "http://i.imgur.com/HBGHFzf.jpg?1")

  cotton = Sailor.create!(name: "Cotton",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/u9NgHWd.png?1")

  jack_the_monkey = Sailor.create!(name: "Jack",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/yH62KXc.jpg?1")

  murtogg = Sailor.create!(name: "Murtogg",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/4yQofMv.jpg?1")

  marty = Sailor.create!(name: "Marty",
                    task_requirement: "car",
                    image_url: "http://i.imgur.com/jN0X4Kk.jpg?1")

  anamaria = Sailor.create!(name: "Anamaria",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/sLWy7jz.jpg?1")

  bootstrap_bill = Sailor.create!(name: "Bootstrap Bill",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/RTESqkr.jpg?1")

  cutler_beckett = Sailor.create!(name: "Cutler Becket",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/uhgvZRC.jpg?1")

  joshamee_gibbs = Sailor.create!(name: "Joshamee Gibbs",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/6xY8qK5.jpg?1")

  james_norrington = Sailor.create!(name: "J. Norrington",
                    task_requirement: "none",
                    image_url: "http://i.imgur.com/PCIJktQ.jpg?1")

  voyage1 = Voyage.create!(user_id: users[0].id, sailor_id: davy_jones.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 11),
                          end_date: Date.new(2015, 04, 13), rating: 5,
                          comment: "It was a surprisingly great service",
                          completed: true)

  voyage2 = Voyage.create!(user_id: users[1].id, sailor_id: davy_jones.id,
                            task_requirement: "truck", rating: 4,
                            comment: "Okay, we didn't make him walk the plank",
                            completed: true)

  voyage3 = Voyage.create!(user_id: users[2].id, sailor_id: davy_jones.id,
                            task_requirement: "none", rating: 3,
                            comment: "Meh, we left him behind enemy lines.
                            There is a code after all.",
                            completed: true)

  voyage4 = Voyage.create!(user_id: users[3].id, sailor_id: davy_jones.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 10),
                          end_date: Date.new(2015, 04, 12), rating: 2,
                          comment: "I will curse him", completed: true)

  voyage5 = Voyage.create!(user_id: users[4].id, sailor_id: davy_jones.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "We sent him to the depths of Davy
                          Jones' locker.", completed: true)

  voyage6 = Voyage.create!(user_id: users[5].id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Joshamee was very professional and takes pride
                          in his best in class service, no equal to his skill
                          and service.", completed: true)

  voyage7 = Voyage.create!(user_id: users[6].id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "Thanks Joshamee! You were great!",
                          completed: true)

  voyage8 = Voyage.create!(user_id: users[7].id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "He mutineed and then we left him stranded
                          on a deserted island.", completed: true)

  voyage9 = Voyage.create!(user_id: users[8].id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Joshamee was great. Handled a tricky curse
                          quite easily", completed: true)

  voyage10 = Voyage.create!(user_id: users[9].id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "He was on time, professional and
                          detail-oriented.", completed: true)

  voyage11 = Voyage.create!(user_id: users[0].id, sailor_id: ragetti.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "Ragetti was fast, thorough, and professional.
                          Happy to work with him again!", completed: true)

  voyage12 = Voyage.create!(user_id: users[1].id, sailor_id: ragetti.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "He was on time, professional and
                          detail-oriented.", completed: true)

  voyage13 = Voyage.create!(user_id: users[2].id, sailor_id: ragetti.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "He did all the grunt work without complaint",
                          completed: true)

  voyage14 = Voyage.create!(user_id: users[3].id, sailor_id: ragetti.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "He spent all of the time looking for his
                          loose eye...", completed: true)

  voyage15 = Voyage.create!(user_id: users[4].id, sailor_id: ragetti.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "I was a little worried when he showed up
                          wearing a dress, but he quickly earned my respect",
                          completed: true)

  voyage16 = Voyage.create!(user_id: users[5].id, sailor_id: cotton.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "He may not talk much but he get's the job
                          done!",
                          completed: true)

  voyage17 = Voyage.create!(user_id: users[6].id, sailor_id: cotton.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "His parrot alone is worth the 5 star
                          rating!",
                          completed: true)

  voyage18 = Voyage.create!(user_id: users[7].id, sailor_id: cotton.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 3,
                          comment: "He was OK.  I could never tell what was on
                          his mind..",
                          completed: true)

  voyage19 = Voyage.create!(user_id: users[8].id, sailor_id: cotton.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 2,
                          comment: "He failed to show up on time",
                          completed: true)

  voyage20 = Voyage.create!(user_id: users[9].id, sailor_id: cotton.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "When our entire crew was screaming in fear of their live,
                          Cotton remained silent of a mouse.  What a brave man!",
                          completed: true)

  voyage21 = Voyage.create!(user_id: users[0].id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "Great for making taking random items from your enemies",
                          completed: true)

  voyage22 = Voyage.create!(user_id: users[1].id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "Don't try and cut him out of the plunder.
                          He will not take kindly to that",
                          completed: true)

  voyage23 = Voyage.create!(user_id: users[2].id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Kept us company, and even does a funny trick with his tail",
                          completed: true)

  voyage24 = Voyage.create!(user_id: users[3].id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "Most professional monkey we have ever worked
                          with!",
                          completed: true)

  voyage25 = Voyage.create!(user_id: users[4].id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 2,
                          comment: "Has trouble taking orders",
                          completed: true)

  voyage26 = Voyage.create!(user_id: users[5].id, sailor_id: murtogg.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 2,
                          comment: "Still loyal to the British Royal Navy..",
                          completed: true)

  voyage27 = Voyage.create!(user_id: users[6].id, sailor_id: murtogg.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 1,
                          comment: "Get's distracted easily",
                          completed: true)

  voyage28 = Voyage.create!(user_id: users[7].id, sailor_id: murtogg.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 2,
                          comment: "Brave, but not a good fit with the crew",
                          completed: true)

  voyage29 = Voyage.create!(user_id: users[8].id, sailor_id: marty.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 4,
                          comment: "Great for the crew morale!",
                          completed: true)

  voyage30 = Voyage.create!(user_id: users[9].id, sailor_id: marty.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Would hire Marty again in a second!",
                          completed: true)

  voyage31 = Voyage.create!(user_id: users[0].id, sailor_id: marty.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Very professional!",
                          completed: true)

  voyage32 = Voyage.create!(user_id: users[1].id, sailor_id: anamaria.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 3,
                          comment: "If you steal her ship, she will never forget it!",
                          completed: true)

  voyage33 = Voyage.create!(user_id: users[2].id, sailor_id: anamaria.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 5,
                          comment: "Anamaria would make a terrific captain!",
                          completed: true)

  voyage34 = Voyage.create!(user_id: users[3].id, sailor_id: anamaria.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 04, 14),
                          end_date: Date.new(2015, 04, 16), rating: 2,
                          comment: "She gave me a ship that sank...",
                          completed: true)

  voyage34 = Voyage.create!(user_id: jack.id, sailor_id: jack_the_monkey.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 11, 15),
                          end_date: Date.new(2015, 11, 16),
                          task_description: "We will be looking for a compass
                          that will be leading us to a great treasure")

  voyage34 = Voyage.create!(user_id: jack.id, sailor_id: anamaria.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 10, 11),
                          end_date: Date.new(2015, 10, 12),
                          task_description: "We'll be collecting a bounty on one
                          Mr. William Turner.")

  voyage34 = Voyage.create!(user_id: jack.id, sailor_id: joshamee_gibbs.id,
                          task_requirement: "car",
                          start_date: Date.new(2015, 07, 01),
                          end_date: Date.new(2015, 07, 02),
                          task_description: "It be a secret mission.  Nothing illegal,
                          I promise.")
end
