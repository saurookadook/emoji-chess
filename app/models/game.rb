# class Game < ApplicationRecord
#   serialize :state, Array
# end

class Game < ActiveRecord::Base
  serialize :state, Array
end
