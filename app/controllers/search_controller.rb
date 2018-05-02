class SearchController < ApplicationController
  def index
    @query_word = params[:q]
    @data_films = Film.where("name LIKE ?" , "%#{@query_word}%")
    @data_people = Celeb.where("name LIKE ?", "%#{@query_word}%")
    @data_search = [@data_films,@data_people];
    respond_to do |format|
        format.html
    format.json {render json: @data_search}
    end
  end

end
