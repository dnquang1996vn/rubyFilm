class AllUserController < ApplicationController
  def show
    @user = User.all.paginate(:page => params[:page], :per_page => 15)
    render "admin/all_user"
  end
end
