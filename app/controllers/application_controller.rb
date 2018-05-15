class ApplicationController < ActionController::Base
  def get_rating_info(film_id, user_id)
    @rate_info = Rate.where("film_id = ? AND user_id = ?" , "#{film_id}", "#{user_id}")
    @film = Film.find(film_id)
    @num_of_rates_for_film = Rate.where("film_id = ?", "#{film_id}").count()
    if(@rate_info.length == 0)
      return 0, @film.avg_rate, @num_of_rates_for_film
    else
      return @rate_info[0].rate, @film.avg_rate, @num_of_rates_for_film
    end
  end
  def get_comments_of_film(film_id)
    @comments = Comment.where("film_id = ?" , "#{film_id}").reverse()
    @comments.each do |comment|
      user_id = comment.user_id
      user = User.find(user_id)
      comment.commenter = user.name
    end
    return @comments
  end

  def get_suggest_films(film_id)
    genresIDs = Film.find(film_id).genres.pluck('id');
    suggest_films = Film.includes(:genres).where(genres:{ id: genresIDs }).take(12)
    suggest_films_1 = suggest_films.slice(0,6)
    suggest_films_2 = suggest_films.slice(6,12)
    return suggest_films_1, suggest_films_2
  end
end
