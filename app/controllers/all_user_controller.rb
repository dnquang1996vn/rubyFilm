class AllUserController < ApplicationController
  def show
    @user = User.all
    render "admin/all_user"
  end
end
