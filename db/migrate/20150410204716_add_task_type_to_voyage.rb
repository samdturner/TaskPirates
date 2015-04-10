class AddTaskTypeToVoyage < ActiveRecord::Migration
  def change
    add_column :voyages, :task_type, :string
  end
end
