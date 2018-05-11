class AllCelebsController < ApplicationController
  def show
    @celebs = Celeb.all.paginate(:page => params[:page], :per_page => 10)
    render "admin/all_celebs"
  end
end
