class StaticPageController < ApplicationController
  def index
  end
  def discover_movies
	render "discover_movies"
  end
  def popular
	render "popular"
  end
  def top_rated
	render "top_rated"
  end
  def now_playing
	render "now_playing"
  end
  def upcoming
	render "upcoming"
  end
  def people
	render "people"
  end
  def login
	render "login"
  end
  def register
  	render "register"
  end
  def film_info
 	render "film_info"
  end
end
