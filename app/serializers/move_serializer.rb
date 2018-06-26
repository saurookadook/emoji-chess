class MoveSerializer < ActiveModel::Serializer
  attributes :id, :turn, :player, :piece, :position 
  belongs_to :game
end
