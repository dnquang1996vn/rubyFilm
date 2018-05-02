Rails.application.routes.draw do
  root to: 'welcome#index'

  get 'movie/show'
  get 'static_page/index'
  get 'welcome/index'
  get 'static_page/discover', to: 'static_page#discover_movies'
  get 'static_page/now_playing', to: 'static_page#now_playing'
  get 'static_page/popular', to: 'static_page#popular'
  get 'static_page/top_rated', to: 'static_page#top_rated'
  get 'static_page/upcoming', to: 'static_page#upcoming'
  get 'static_page/login', to: 'static_page#login'
  get 'static_page/register', to: 'static_page#register'
  get 'static_page/people', to: 'static_page#people'
  get 'static_page/film_info', to: 'static_page#film_info'

  get 'search/index', to: 'search#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
