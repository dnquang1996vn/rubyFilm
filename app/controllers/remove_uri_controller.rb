class RemoveUriController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

    @user_id = params[:id]
    puts "hassssaha"
    puts @user_id

    user = User.find_by(id: @user_id)
    user.destroy

  end
end
