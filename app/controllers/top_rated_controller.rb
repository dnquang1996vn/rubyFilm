class TopRatedController < ApplicationController
  def index
  	@films = Film.order('avg_rate DESC').page(params[:page]).per(10)
  	render "top_rated/index"
  end
end
