class PeopleController < ApplicationController
  def show
    @person_id = params[:id]
    @person = Celeb.find(@person_id)
    @films = @person.acting_films
    render 'people/people'
  end
end
