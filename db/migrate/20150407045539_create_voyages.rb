class CreateVoyages < ActiveRecord::Migration
  def change
    create_table :voyages do |t|
      t.integer :user_id, null: false
      t.integer :sailor_id, null: false
      t.string :name
      t.date :start_date
      t.date :end_date
      t.boolean :completed, default: false
      t.integer :rating
      t.text :comment

      t.timestamps null: false
    end
    add_foreign_key :voyages, :users
    add_foreign_key :voyages, :sailors
    add_index(:voyages, :user_id)
    add_index(:voyages, :sailor_id)
  end
end
