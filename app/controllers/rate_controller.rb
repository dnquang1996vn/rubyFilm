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
        puts @rate_info.length
        @rate_info[0].rate = @rate_point;
        @rate_info[0].save
        puts "rated"
      else
        object = Rate.create(:user_id => @user_id, :film_id => @film_id, :rate => @rate_point)
        puts "not rated"
      end
      @data = ["command_code" => 1, "avg_point" => 10, "rate_times" => 100]
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
end

