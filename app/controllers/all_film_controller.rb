class AllFilmController < ApplicationController
  def show
    @film = Film.all
    render "admin/allFilm"
  end
end
