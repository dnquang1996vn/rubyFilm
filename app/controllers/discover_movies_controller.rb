class DiscoverMoviesController < ApplicationController
  def index
  	@genres = Genre.all
  end
  def show
  	@year = params[:primary_released_year]
  	@sortBy = params[:sort_by]
  	@sort_key = @sortBy.split(".")
  	@genre = params[:genre]
  	@keyword = params[:keyword]

  	@sort_attr = @sort_key[0]
  	@sort_detail = @sort_key[1]
  	@query = Film.order(%q(concat_ws(" ",@sort_attr,@sort_detail)))
  	@query = @query.where('extract(year from released_date) = ?',@year) if @year.present? 

  	@query = @query.includes(:genres).where("genres.id = ?",@genre) if @genre.present?
 	
 	@query = @query.where("name LIKE '%?%'",@keyword) if @keyword.present?

 	@films = @query.page(params[:page]).per(16)

 	@data = render_to_string :template => "discover_movies/list", :locals => {:@films => @films}, :layout => false
 	# respond_to do |format| 
  #     format.json {render json: @data}
  #   end
  render :json => @data
  end
end
