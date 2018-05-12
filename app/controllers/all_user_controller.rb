class AllUserController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @user = User.all.paginate(:page => params[:page], :per_page => 15)
    render "admin/all_user"
  end
end
