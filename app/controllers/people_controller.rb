class PeopleController < ApplicationController
	def index
		@people = Celeb.all.page(params[:page]).per(16)
	end
  	def show
    	@person_id = params[:id]
    	@person = Celeb.find(@person_id)
    	@films = @person.acting_films
    render 'people/people'
  	end
end
