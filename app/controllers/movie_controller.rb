class MovieController < ApplicationController
  def show
    @film_id = params[:id]
    @film = Film.where("id = ?" , "#{@film_id}").first
    render 'movie/film_info'
  end
end
