class ChangeRoleController < ApplicationController

  def index

    @user_id = params[:user_id]
    @role = params[:role]
    puts "ssalskkkkrole"

    puts @role
    puts @user_id

    if @role == 'admin'
      user = User.find_by(id: @user_id)
      user.update(role: 'user')
    else
      user = User.find_by(id: @user_id)
      user.update(role: 'admin')
    end

  end
end
