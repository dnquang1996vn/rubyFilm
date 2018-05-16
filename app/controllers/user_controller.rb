class UserController < ApplicationController
  def show
    @user = User.find_by id: params[:id]
    render "user/profile"
  end

  def new
  end
end
