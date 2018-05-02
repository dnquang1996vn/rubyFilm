class ActorFilm < ApplicationRecord
  self.table_name = "actor_film"
  belongs_to :film
  belongs_to :actor, class_name: 'Celeb', foreign_key: 'actor_id'
end
