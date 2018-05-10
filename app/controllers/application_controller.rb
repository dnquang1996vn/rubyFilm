class ApplicationController < ActionController::Base
  def get_rating_info(film_id, user_id)
    @rate_info = Rate.where("film_id = ? AND user_id = ?" , "#{film_id}", "#{user_id}")
    if(@rate_info.length == 0)
      return 0;
    else
      return @rate_info[0].rate
    end
  end
  def get_comments_of_film(film_id)
    @comments = Comment.where("film_id = ?" , "#{film_id}")
    @comments.each do |comment|
      user_id = comment.user_id
      user = User.find(user_id)
      comment.commenter = user.name
    end
    return @comments
  end
end
