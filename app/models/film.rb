class Film < ApplicationRecord
  self.primary_key = 'id'

  has_many :actor_films
  has_many :actors, through: :actor_films

  has_many :director_films
  has_many :directors, through: :director_films

  has_many :genre_films
  has_many :genres, through: :genre_films

  has_many :wishlists

  has_many :comments
  has_many :rates
end
