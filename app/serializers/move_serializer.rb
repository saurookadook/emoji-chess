class MoveSerializer < ActiveModel::Serializer
  attributes :id, :position, :player, :turn
  belongs_to :game
end
