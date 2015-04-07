class CreateVoyages < ActiveRecord::Migration
  def change
    create_table :voyages do |t|
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :start_location, null: false
      t.string :end_location, null: false

      t.timestamps null: false
    end
    add_foreign_key :voyages, :users
    add_index(:voyages, :user_id)
  end
end
