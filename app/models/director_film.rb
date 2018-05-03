class DirectorFilm < ApplicationRecord
  self.table_name = "director_film"
  belongs_to :film
  belongs_to :director, class_name: 'Celeb', foreign_key: 'dir_id'
end
