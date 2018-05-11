class AllFilmController < ApplicationController
  def show
    @film = Film.all.paginate(:page => params[:page], :per_page => 10)
    render "admin/all_film"
  end
end
