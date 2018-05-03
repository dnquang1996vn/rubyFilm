class Rate < ApplicationRecord
  self.primary_key = 'id'

  belongs_to :film
  belongs_to :user
end
