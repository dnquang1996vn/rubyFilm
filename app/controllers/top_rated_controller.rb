class TopRatedController < ApplicationController
  def index
  	@films = Film.where("released_date < ?",Date.today).order('released_date DESC').page(params[:page]).per(10)
  	render "now_playing/index"
  end
end
