class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.string :position
      t.string :player
      t.string :turn

      t.timestamps
    end
  end
end
