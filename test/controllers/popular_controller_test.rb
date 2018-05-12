require 'test_helper'

class PopularControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get popular_index_url
    assert_response :success
  end

end
