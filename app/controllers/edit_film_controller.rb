class EditFilmController < ApplicationController
  def show
    @film_id = params[:id]
    # user_id = 100;
    @film = Film.find(@film_id)
    @genres = @film.genres
    @actors = @film.actors
    render "admin/edit/edit_film/"
  end
end
