class PopularController < ApplicationController
  def index
  	@films = Film.order('popular desc').page(params[:page]).per(10)
  	render "popular/index"
  end
end
