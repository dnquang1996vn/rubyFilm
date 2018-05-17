class User < ApplicationRecord
  self.primary_key = 'id'
  has_secure_password

  has_many :wishlists
  has_many :wishFilmlists, through: :wishlists, source: :film

  has_many :comments
  has_many :commentFilmlists, through: :comments, source: :film

  has_many :rates
  has_many :rateFilmlists, through: :rates, source: :film

  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
               BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

end
