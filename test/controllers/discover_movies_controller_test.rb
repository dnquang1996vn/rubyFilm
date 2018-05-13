require 'test_helper'

class DiscoverMoviesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get discover_movies_index_url
    assert_response :success
  end

end
