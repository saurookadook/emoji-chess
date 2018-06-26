class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.string :turn
      t.string :player
      t.string :piece
      t.string :position
      t.integer :game_id

      t.timestamps null: false
    end
  end
end
