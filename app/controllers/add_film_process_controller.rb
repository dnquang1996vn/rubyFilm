class AddFilmProcessController < ApplicationController

  def index

    @name = params[:name]
    @released_date = params[:released_date]
    @genre = params[:genre]
    @description = params[:description]
    @img = params[:img]
    @trailer = params[:trailer]
    @length = params[:length]
    @rate = params[:rate]
    @mat = params[:mat]
    @directors = params[:directors]
    @casts = params[:casts]
    @roles = params[:roles]

    puts @name

    film = Film.new do |u|
      u.name = @name
      u.released_date = @released_date
      u.genre = @genre
      u.description = @description
      u.img = @img
      u.trailer = @trailer
      u.length = @length
      u.rate = @rate
      u.mat = @mat
      u.directors = @directors
      u.casts = @casts
      u.roles = @roles
    end

    film.save
  end

end
