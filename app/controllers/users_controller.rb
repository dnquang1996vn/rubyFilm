class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @user = User.find_by id: params[:id]
    render "users/profile"
  end

  def new
    @user = User.new
    render "users/register"
  end

  def create
    @user = User.new(user_params)
    @user.role = 'user'
    if @user.save
      flash[:success] = "Welcome to the Movie App!"
      redirect_to @user
    else
      render 'users/register'
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
