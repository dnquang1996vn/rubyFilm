require 'test_helper'

class TopRatedControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get top_rated_index_url
    assert_response :success
  end

end
