class CommentController < ApplicationController

  def create
    user_id = 100
    login = TRUE
    @film_id = params[:film_id]
    @comment = params[:comment]
    @user_name = User.find(user_id).name
    if(!login)
        @data = {"added" => 0}
    else
      Comment.create(:user_id => user_id, :film_id => @film_id, :comment => @comment)
      @data = {"added" => 1, "user_name" => @user_name}
    end

    respond_to do |format|
      format.json {render json: @data}
    end
  end

end
