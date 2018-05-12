class WelcomeController < ApplicationController
  def index
  	@recent_films = Film.order("released_date DESC").limit(3)
  	@popular_films = Film.order("popular DESC").limit(6)
  end
end
