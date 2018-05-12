class RemoveFilmController < ApplicationController

  def index

    @film_id = params[:film_id]
    puts @film_id

    film = Film.find_by(id: @film_id)
    film.destroy

  end
end
