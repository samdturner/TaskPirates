class CreateCrewAssignments < ActiveRecord::Migration
  def change
    create_table :crew_assignments do |t|
      t.integer :sailor_id, null: false
      t.integer :voyage_id, null: false

      t.timestamps null: false
    end
    add_index(:crew_assignments, :sailor_id)
    add_index(:crew_assignments, :voyage_id)

    add_foreign_key :crew_assignments, :voyages
    add_foreign_key :crew_assignments, :sailors
  end
end
