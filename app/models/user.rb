class User < ApplicationRecord
  self.primary_key = 'id'
  has_secure_password

  has_many :wishlists
  has_many :wishFilmlists, through: :wishlists, source: :film

  has_many :comments
  has_many :commentFilmlists, through: :comments, source: :film

  has_many :rates
  has_many :rateFilmlists, through: :rates, source: :film
end
