class CreateDirectorFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :director_films do |t|

      t.timestamps
    end
  end
end
