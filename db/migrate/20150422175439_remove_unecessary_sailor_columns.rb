class RemoveUnecessarySailorColumns < ActiveRecord::Migration
  def change
    remove_column :sailors, :swabbingDecks, :integer
    remove_column :sailors, :loadingCannons, :integer
    remove_column :sailors, :manningHelm, :integer
  end
end
