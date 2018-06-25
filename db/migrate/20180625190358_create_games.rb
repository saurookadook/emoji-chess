class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :state
      t.string :name

      t.timestamps null: false
    end
  end
end
