jQuery(document).ready(function () {
    var token = $('meta[name="csrf-token"]').attr('content');

    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', token);
        }
    });
    var previous_rate = document.getElementById('pre_rate').value;
    // console.log('previous_Rate ' + previous_rate)
    if (previous_rate > 0) {
        $("#rate_noti").html("<p>You rated this film "+previous_rate+" stars</p>");
        $('.rate-btn').removeClass('rate-btn-active');
        for (var i = previous_rate; i >= 0; i--) {
            $('.btn-' + i).addClass('rate-btn-active');
        }
        ;
    }
    else {
        $("#rate_noti").html("<p>You have not rated this film</p>");
    }

    $('.rate-btn').hover(function () {
        $('.rate-btn').removeClass('rate-btn-hover');
        var therate = $(this).attr('id');
        for (var i = therate; i >= 0; i--) {
            $('.btn-' + i).addClass('rate-btn-hover');
        }
        ;
    });
    $('.rate-btn').click(function () {
        var dataRate = document.getElementById('film_id').value;
        // console.log("dataRate = " + dataRate);
        var therate = $(this).attr('id');
        $('.rate-btn').removeClass('rate-btn-active');
        for (var i = therate; i >= 0; i--) {
            $('.btn-' + i).addClass('rate-btn-active');
        }
        ;
        $.ajax(
            {
                method: 'POST',
                url: '/rate',
                data: {
                    rate: 1,
                    film_id: dataRate,
                    rate_point: therate,
                },
                success: function (return_var) {
                    // console.log("return var");
                    console.log(return_var);
                    if (return_var[0].command_code == 0) {
                        swal("Sorry!", "You need to login before rating this film!", "error");
                        // window.location.href = "/login"
                    }
                    else {
                        swal("Good job!", "Thank you for your rating!", "success");
                        $("#rate_info").html("<p>Rated " + return_var[0].avg_point + " stars out of " + return_var[0].rate_times + " reviews.</p>");
                        $("#rate_noti").html("<p>You rated this film " + therate + " stars</p>");
                        // console.log(return_var);
                    }
                },
                dataType: 'Json',
            });
    });
    $("#comment_btn").click(function () {
        var comment_box = document.getElementById('comment').value;
        var film_id = document.getElementById('film_id').value;
        if (comment_box.length < 20) {
            swal("Something's wrong!", "Comment should be more than 20 characters!", "warning");
        } else {
            $.ajax(
                {
                    method: 'POST',
                    url: '/comment',
                    data: {
                        film_id: film_id,
                        comment: comment_box
                    },
                    success: function (comment_add) {
                        // console.log(comment_add)
                        if (comment_add['added'] == 0) {
                            swal("Sorry!", "You need to login before commenting this film!", "error");
                            // window.location.href = "/login"
                        }
                        else {
                            var all_comments = document.getElementById('all_comments');
                            var old_comments = all_comments.innerHTML;
                            var added_comment = "<div class='friend'>" +
                                "                        <h5 class=\"commenter\">" + comment_add['user_name'] + "</h5>" +
                                "                        <p class=\"comment_content\">" + comment_box + "</p>" +
                                "                    </div>";
                            swal("Very good!", "Thank you for your comment!", "success");
                            all_comments.innerHTML = added_comment + old_comments;
                        }
                    },
                    dataType: 'Json',
                }
            );
        }
    });
})
