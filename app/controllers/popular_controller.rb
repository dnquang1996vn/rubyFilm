class PopularController < ApplicationController
  def index
  	@films = Film.order(popular: :desc).page.(params[:page]).per(10)
  end
end
