class AllFilmController < ApplicationController
  def show
    @film = Film.all
    render "admin/all_film"
  end
end
