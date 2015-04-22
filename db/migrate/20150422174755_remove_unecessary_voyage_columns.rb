class RemoveUnecessaryVoyageColumns < ActiveRecord::Migration
  def change
    remove_column :voyages, :name, :string
  end
end
