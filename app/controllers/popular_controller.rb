class PopularController < ApplicationController
  def index
  	@films = Film.order('popular DESC').page(params[:page]).per(10)
  	render "popular/index"
  end
end
