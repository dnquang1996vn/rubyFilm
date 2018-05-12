class EditCelebProcessController < ApplicationController
  def index

    @celeb_id = params[:celeb_id]
    @name = params[:name]
    @dob = params[:dob]
    @pob = params[:pob]
    @bio = params[:bio]
    @img = params[:img_path]
    @gender = params[:gender]
    puts @name

    celeb = Celeb.find_by(id: @celeb_id)
    celeb.update(name: @name, dob: @dob, pob: @pob, bio: @bio, img_path: @img, gender: @gender)
  end

end
