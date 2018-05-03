class GenreFilm < ApplicationRecord
  self.table_name = "genre_film"
  self.primary_key = 'id'
  belongs_to :film
  belongs_to :genre
end
