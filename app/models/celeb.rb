class Celeb < ApplicationRecord
  self.primary_key = 'id'
  has_many :actor_films, foreign_key: 'actor_id'
  has_many :acting_films, through: :actor_films, source: :film
  has_many :director_films, foreign_key: 'dir_id'
  has_many :directing_films, through: :director_films, source: :film
end
