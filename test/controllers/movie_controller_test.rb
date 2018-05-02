require 'test_helper'

class MovieControllerTest < ActionDispatch::IntegrationTest
  test "should get film_info" do
    get movie_film_info_url
    assert_response :success
  end

end
