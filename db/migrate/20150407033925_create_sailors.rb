class CreateSailors < ActiveRecord::Migration
  def change
    create_table :sailors do |t|
      t.string  :name, null: false
      t.integer :swabbingDecks, null: false
      t.integer :loadingCannons, null: false
      t.integer :manningHelm, null: false

      t.timestamps null: false
    end
  end
end
