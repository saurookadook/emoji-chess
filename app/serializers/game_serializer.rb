class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :name
  has_many :moves
end
