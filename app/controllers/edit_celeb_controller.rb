class EditCelebController < ApplicationController
  def show
    @celeb_id = params[:id]
    @celeb = Celeb.find(@celeb_id)
    render "admin/edit/edit_celeb/"
  end
end
