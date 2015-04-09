# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150407045539) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sailors", force: :cascade do |t|
    t.string   "name",           null: false
    t.integer  "swabbingDecks",  null: false
    t.integer  "loadingCannons", null: false
    t.integer  "manningHelm",    null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname"
    t.string   "lname"
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "voyages", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.integer  "sailor_id",                  null: false
    t.string   "name"
    t.date     "start_date"
    t.date     "end_date"
    t.boolean  "completed",  default: false
    t.integer  "rating"
    t.text     "comment"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "voyages", ["sailor_id"], name: "index_voyages_on_sailor_id", using: :btree
  add_index "voyages", ["user_id"], name: "index_voyages_on_user_id", using: :btree

  add_foreign_key "voyages", "sailors"
  add_foreign_key "voyages", "users"
end
