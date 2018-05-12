class RemoveCelebController < ApplicationController
  def index

    @celeb_id = params[:celeb_id]
    puts @celeb_id

    celeb = Celeb.find_by(id: @celeb_id)
    celeb.destroy

  end
end
