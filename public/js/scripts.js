(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });


    $(window).on("scroll touchmove", function () {
        $('.search_bar').toggleClass('tiny', $(document).scrollTop() > 0);
    });

    $('a#addToWishList').bind('click',function () {
        var film_id = $(this).children('#film_id').val();
        var login = true;
        if(!login)
        {
            swal("Sorry!", "Login Required!", "error");
            return;
        } else
        {
            // var user_id = user.id;
            var user_id = 100;
        }
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/wishlist/new',
            datatType : 'json',
            type: 'GET',
            data: {
                film_id : film_id,
                user_id: user_id,
            },
            contentType: "application/x-www-form-urlencoded",

            success:function(response) {
                console.log("wishlist " + response)
                if(response == 1)
                {
                    swal("Sorry!", "The film chosen is already in your list!", "error");
                } else if(response == 2)
                {
                    swal("Good job!", "Film added!", "success");
                } else if(typeof response == "undefined")
                {
                    swal("Undefined Error", "Undefined response!", "error");
                }
            },
            error:function(){
                swal("Error", "", "error");
            }
        });
    });
    $('button#button_remove_film').click(function () {
        var user_id = 100;
        var film_id = $(this).val();
        var self = this;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (confirm('Are you sure you want to remove this film from your list?')) {
            $.ajax({
                url:  '/wishlist/0000',
                type: 'DELETE',
                data:{
                    user_id : user_id,
                    film_id : film_id,
                },
                contentType: "application/x-www-form-urlencoded",
                success : function (response) {
                    if(response == 1)
                    {
                        swal("Done!", "A film is deleted!", "success");
                        $(self).parent().parent().hide('slow', function(){ $(self).parent().parent().remove(); });
                    } else {
                        swal("Sorry!", "There was a problem!", "error");
                    }
                },
                error: function () {
                    swal("Sorry!", "Deleted Error!", "error");
                }
            });
        }
    });
})(jQuery);