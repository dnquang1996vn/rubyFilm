class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    @user = User.new
    render "sessions/login"
  end

  def create
    user = User.find_by email: params[:session][:email].downcase
    if user && user.authenticate(params[:session][:password])
      log_in user
      if user.role == 'admin'
        redirect_to '/admin'
      else
        redirect_to '/'
      end
    else
      flash.now[:danger] = "Invalid email/password combination"
      render :new
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

end
