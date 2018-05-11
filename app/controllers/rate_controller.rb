class RateController < ApplicationController
  def index
    @user_id = 100 #put here till login checking is completed
    @film_id = params[:film_id]
    @rate_point = params[:rate_point]
    loggedin = true
    if !loggedin
      @data = ["command_code" => 0, "avg_point" => 0, "rate_times" => 0]
    else
      if is_user_rated(@user_id, @film_id)
        @rate_info[0].rate = @rate_point;
        @rate_info[0].save
      else
        object = Rate.create(:user_id => @user_id, :film_id => @film_id, :rate => @rate_point)
      end
      avg_point, rate_times = cal_new_avg(@film_id)
      update_new_avg_rate_in_films(@film_id, avg_point)
      @data = ["command_code" => 1, "avg_point" => avg_point, "rate_times" => rate_times]
    end
    respond_to do |format|
      format.html
      format.json {render json: @data}
    end
  end

  def is_user_rated(user_id, film_id)
    @rate_info = Rate.where("film_id = ? AND user_id = ?" , "#{@film_id}", "#{@user_id}")
    if(@rate_info.size == 0)
      return false
    else
      return true
    end
  end

  def cal_new_avg(film_id)
    num_of_rates = Film.find(film_id).rates.count()
    avg_point = Film.find(film_id).rates.average(:rate)
    return avg_point, num_of_rates #return the avg_point and the number of rates for a film
  end

  def update_new_avg_rate_in_films(film_id,avg_rate)
    film = Film.find(film_id)
    film.avg_rate = avg_rate
    film.save
  end
end

