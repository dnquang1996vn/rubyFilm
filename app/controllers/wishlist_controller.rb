class WishlistController < ApplicationController
  def index
    user_id = current_user.id
    @films = User.find(user_id).wishFilmlists
    # @wishlist = Wishlist.where("user_id = ?","#{user_id}")
    render 'wishlist/wishlist'
  end

  def new
    user_id = current_user.id
    film_id = params[:film_id]
    if Wishlist.where("film_id = ? AND user_id = ?", "#{film_id}", "#{user_id}").count() != 0 #not added to wishlist yet
      @command_code = 1
    else
      Wishlist.create(:user_id => user_id, :film_id => film_id, :status => '0')
      @command_code = 2
    end
    respond_to do |format|
      format.json {render json: @command_code}
    end
  end

  def destroy
    user_id = current_user.id
    film_id = params[:film_id]
    Wishlist.where("film_id = ? AND user_id = ?", "#{film_id}", "#{user_id}").first.delete()
    @command_code = 1
    respond_to do |format|
      format.json {render json: @command_code}
    end
  end
end
