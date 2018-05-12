require 'test_helper'

class UpComingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get up_coming_index_url
    assert_response :success
  end

end
