class MovieController < ApplicationController
  def show
    @film_id = params[:id]
    user_id = 100;
    @film = Film.find(@film_id)
    @genres = @film.genres
    @actors = @film.actors
    @pre_rate, @avg_rate, @num_of_rates = get_rating_info(@film_id, user_id);
    @comments = get_comments_of_film(@film_id)
    render 'movie/film_info'
  end
end
