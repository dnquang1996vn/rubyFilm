require 'test_helper'

class NowPlayingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get now_playing_index_url
    assert_response :success
  end

end
