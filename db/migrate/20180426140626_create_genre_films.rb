class CreateGenreFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_films do |t|

      t.timestamps
    end
  end
end
