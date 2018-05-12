class AddCelebProcessController < ApplicationController
    def index

      @name = params[:name]
      @dob = params[:dob]
      @pob = params[:pob]
      @bio = params[:bio]
      @img = params[:img]
      @gender = params[:gender]
      puts @name
      celeb = Celeb.new do |u|
        u.name = @name
        u.dob = @dob
        u.pob = @pob
        u.bio = @bio
        u.img = @img
        u.gender = @gender
      end

      celeb.save
    end
end
