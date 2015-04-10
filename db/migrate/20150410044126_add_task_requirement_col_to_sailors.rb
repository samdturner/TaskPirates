class AddTaskRequirementColToSailors < ActiveRecord::Migration
  def change
    add_column :sailors, :task_requirement, :string
  end
end
