class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :name
end
