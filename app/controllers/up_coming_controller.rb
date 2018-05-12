class UpComingController < ApplicationController
  def index
  	@films = Film.where("released_date >= ?",Date.today).order('released_date DESC').page(params[:page]).per(10)
  	render "up_coming/index"
  end
end
