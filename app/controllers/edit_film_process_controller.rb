class EditFilmProcessController < ApplicationController
  def index
    @film_id = params[:film_id]
    @name = params[:name]
    @released_date = params[:released_date]
    @description = params[:description]
    @img = params[:img]
    @trailer = params[:trailer]
    @length = params[:length]
    puts @name

    film = Film.find_by(id: @film_id)
    film.update(id: @film_id, name: @name, released_date: @released_date, description: @description,
                img_path: @img, trailer_path: @trailer, length: @length)
  end
end
