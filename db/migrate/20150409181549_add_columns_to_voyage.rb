class AddColumnsToVoyage < ActiveRecord::Migration
  def change
    add_column :voyages, :task_requirement, :string
    add_column :voyages, :task_description, :text
  end
end
