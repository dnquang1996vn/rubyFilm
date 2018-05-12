class RemoveUriController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

    @user_id = params[:id]
    puts "hassssaha"
    puts @user_id
    User.where(:id => @user_id).destroy_all

  end
end
