class AddImageColumnToSailor < ActiveRecord::Migration
  def change
    add_column :sailors, :image_url, :string
  end
end
