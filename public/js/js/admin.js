/**
 * Created by bao on 06/04/2018.
 */
(function($) {
    "use strict";
    var i = 3;
    $("#inputCast3").tokenInput(tokenCelebsUri);

    $("#inputDirector3").tokenInput(tokenCelebsUri);
    $("#inputGenre3").tokenInput(tokenGenreUri);
    $('#cast3').find("ul").addClass("cast");

    $('#addFilmSubmitChange').click(function () {
        var tokenDir = $('#director3').find("ul").text();
        var directors = tokenDir.split('×');
        var tokenGenre = $('#genre3').find("ul").text();
        var genre = tokenGenre.split('×');
        var j;
        var roles = [];
        var casts = [];
        for (j = 3; j < i + 1; j++)
        {
            var role = document.getElementsByClassName("role" + j)[0].value;
            var tokenCast = $('#cast'+j).find("ul").text();
            var cast = tokenCast.split('×');

            if(role && cast[0])
            {
                roles.push(role);
                casts.push(cast[0]);
            } else if(role == '' && cast[0] == '')
            {
                continue;
            } else {
                alert("Both fields need to be filled!");
                return;
            }
        }
        var name = document.getElementById("inputName3").value;
        var released_date = document.getElementById("inputReleased3").value;
        var description = document.getElementById("inputDescription3").value;
        var img = document.getElementById("inputImage3").value;
        var trailer = document.getElementById("inputTrailer3").value;
        var length = document.getElementById("inputLength3").value;
        var rate = document.getElementById("inputRate3").value;
        var mat = document.getElementById("inputMat3").value;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if(name != '' && released_date != '' && description != '' && img != '' && rate != '' && directors != '' && genre != '' && casts != '' && roles != '') {
            $.ajax({
                url: ajaxAddUri,
                datatType: 'json',
                type: 'POST',
                data: {
                    id: 'film',
                    name: name,
                    released_date: released_date,
                    genre: genre,
                    description: description,
                    img: img,
                    trailer: trailer,
                    length: length,
                    rate: rate,
                    mat: mat,
                    directors: directors,
                    casts: casts,
                    roles: roles
                },
                contentType: "application/x-www-form-urlencoded",

                success: function () {
                    alert("Film " + name + " was successfully added to database!");
                    window.location.href = dashboardUri;
                },
                error: function () {
                    alert("Error!!!!");
                }
            });
        } else {
            alert("Please complete all fields!");
        }
    });
    $('#cast3').find("button").click(function () {
        for (var j = 3; j < i + 1; j++) {
            var role = document.getElementsByClassName("role" + j)[0].value;
            var tokenCast = $('#cast' + j).find("ul").text();
            var cast = tokenCast.split('×');
            if (role == '' || cast == '' ) {
                alert("The existing fields must be filled before add some more!");
                return;
            }
        }
        i++;
        var str = "<label for='inputCast" + i + "' class='col-sm-2 control-label'></label>" +
            "<div class='col-sm-10' id='cast" + i + "' style='align-content: center'>" +
            "<input type='text' class='form-control' id='inputCast" + i + "' placeholder='Cast' name='cast'>" +
            "<span style='display: inline-flex;margin: 10px'>AS</span>" +
            "<input type='text' class='role" + i + "' width='300px' style='display: inline-flex'></div><br>";
        $(str).appendTo('#cast-form');
        $("#inputCast" + i).tokenInput(tokenCelebsUri);
        $('#cast' + i).find("ul").addClass("cast");
    });
    $('#addCelebSubmitChange').click(function () {
        var name = document.getElementById("inputName3").value;
        var img = document.getElementById("inputImage3").value;
        var dob = document.getElementById("inputDOB3").value;
        var pob = document.getElementById("inputPOB3").value;
        var bio = document.getElementById("inputBio3").value;
        var gender = parseInt($('#inputGender3').val(),10);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: ajaxAddUri,
            datatType : 'json',
            type: 'POST',
            data: {
                id : 'celeb',
                name: name,
                dob : dob,
                pob : pob,
                bio : bio,
                img : img,
                gender: gender
            },
            contentType: "application/x-www-form-urlencoded",

            success:function() {
                alert("Profile of "+name+" was successfully added to database!");
                window.location.href = dashboardUri;
            },
            error:function(){
                alert("Error!!!!");
            }
        });
    });

    window.onload = function () {
        if (typeof directors !== 'undefined' && typeof casts !== 'undefined' && typeof roles !== 'undefined' && typeof genres !== 'undefined') {
            var director = JSON.parse(directors.replace(/&quot;/g, '"').replace(/&#039;/g,"'"));
            var cast = JSON.parse(casts.replace(/&quot;/g, '"').replace(/&#039;/g,"'"));
            var role = JSON.parse(roles.replace(/&quot;/g, '"').replace(/&#039;/g,"'"));
            var genre = JSON.parse(genres.replace(/&quot;/g, '"').replace(/&#039;/g,"'"));
            for (var k = 0; k < genre.length; k++)
            {
                var str = "<li class='token-input-token-facebook'><p>" + genre[k] + "</p><span class='token-input-delete-token-facebook'>×</span></li>";
                $('#edit-film').find('#genre3 ul.token-input-list-facebook').prepend(str);
            }
            for (k = 0; k < director.length; k++)
            {
                var str1 = "<li class='token-input-token-facebook'><p>" + director[k] + "</p><span class='token-input-delete-token-facebook'>×</span></li>";
                $('#edit-film').find('#director3 ul.token-input-list-facebook').prepend(str1);
            }
            for (k = 0; k < cast.length; k++)
            {
                i++;
                var str2 =   "<label for='inputCast"+i+"' class='col-sm-2 control-label'></label>"+
                    "<div class='col-sm-10' id='cast"+i+"' style='align-content: center'>" +
                    "<input type='text' class='form-control' id='inputCast"+ i +"' placeholder='Cast' name='cast'>" +
                    "<span style='display: inline-flex;margin: 10px'>AS</span>" +
                    "<input type='text' class='role"+i+"' width='300px' style='display: inline-flex'></div><br>";
                $(str2).appendTo('#cast-form');
                $("#inputCast" + i).tokenInput(tokenCelebsUri);
                $('#cast' + i).find("ul").addClass("cast");
                var str3 = "<li class='token-input-token-facebook'><p>" + cast[k] + "</p><span class='token-input-delete-token-facebook'>×</span></li>";
                $('#edit-film').find('#cast'+i+' ul.token-input-list-facebook').prepend(str3);
                $('.role'+i).val(role[k]);
            }
        }

    };
    $('#editFilmSubmitChange').click(function () {
        var tokenDir = $('#director3').find("ul").text();
        var directors = tokenDir.split('×');
        var tokenGenre = $('#genre3').find("ul").text();
        var genre = tokenGenre.split('×');
        var j;
        var roles = [];
        var casts = [];
        for (j = 3; j < i + 1; j++)
        {
            var role = document.getElementsByClassName("role" + j)[0].value;
            var tokenCast = $('#cast'+j).find("ul").text();
            var cast = tokenCast.split('×');

            if(role && cast[0])
            {
                roles.push(role);
                casts.push(cast[0]);
            } else if(role == '' && cast[0] == '')
            {
                continue;
            } else {
                alert("Both fields need to be filled!");
                return;
            }
        }
        var name = document.getElementById("inputName3").value;
        var released_date = document.getElementById("inputReleased3").value;
        var description = document.getElementById("inputDescription3").value;
        var img = document.getElementById("inputImage3").value;
        var trailer = document.getElementById("inputTrailer3").value;
        var length = document.getElementById("inputLength3").value;
        var rate = document.getElementById("inputRate3").value;
        var mat = document.getElementById("inputMat3").value;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if(film_id != '' && name != '' && released_date != '' && description != '' && img != '' && rate != '' && directors != '' && genre != '' && casts != '' && roles != '' ) {
            $.ajax({
                url: ajaxEditUri,
                datatType: 'json',
                type: 'POST',
                data: {
                    id: 'film',
                    film_id : film_id,
                    name: name,
                    released_date: released_date,
                    genre: genre,
                    description: description,
                    img: img,
                    trailer: trailer,
                    length: length,
                    rate: rate,
                    mat: mat,
                    directors: directors,
                    casts: casts,
                    roles: roles
                },
                contentType: "application/x-www-form-urlencoded",

                success: function () {
                    alert("Film " + name + " was successfully edited!");
                    window.location.href = allFilmsUri;
                },
                error: function () {
                    alert("Error!!!!");
                }
            });
        } else {
            alert("Please complete all fields!");
        }
    });
    $('button#button_remove_film').click(function () {
        var film_id = $(this).val();
        var self = this;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (confirm('Are you sure you want to delete this film?')) {
            $.ajax({
                url: ajaxRemoveUri,
                type: 'POST',
                data:{
                    id : 'film',
                    film_id : film_id
                },
                contentType: "application/x-www-form-urlencoded",
                success : function () {
                        $(self).parent().parent().hide('slow', function(){ $(self).parent().parent().remove(); });
                },
                error: function () {
                    alert("Delete Error!");
                }
            });
        }
    });
    $('#editCelebSubmitChange').click(function () {
        var name = document.getElementById("inputName3").value;
        var img = document.getElementById("inputImage3").value;
        var dob = document.getElementById("inputDOB3").value;
        var pob = document.getElementById("inputPOB3").value;
        var bio = document.getElementById("inputBio3").value;
        var gender = parseInt($('#inputGender3').val(),10);
        var celeb_id = $(this).val();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: ajaxEditUri,
            type: 'POST',
            data: {
                id: 'celeb',
                celeb_id : celeb_id,
                name: name,
                img_path: img,
                dob : dob,
                pob : pob,
                bio : bio,
                gender : gender
            },
            contentType: "application/x-www-form-urlencoded",

            success: function () {
                alert("Profile of " + name + " was successfully edited!");
                window.location.href = allCelebsUri;
            },
            error: function () {
                alert("Error!!!!");
            }
        });
    });
    $('button#button_remove_celeb').click(function () {
        var celeb_id = $(this).val();
        var self = this;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (confirm('Are you sure you want to delete this celeb?')) {
            $.ajax({
                url: ajaxRemoveUri,
                type: 'POST',
                data:{
                    id : 'celeb',
                    celeb_id : celeb_id
                },
                contentType: "application/x-www-form-urlencoded",
                success : function () {
                    $(self).parent().parent().hide('slow', function(){ $(self).parent().parent().remove(); });
                },
                error: function () {
                    alert("Delete Error!");
                }
            });
        }
    });
    $('button#button_remove_user').click(function () {
        var user_id = $(this).val();
        var self = this;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (confirm('Are you sure you want to delete this user?')) {
            $.ajax({
                url: ajaxRemoveUri,
                type: 'POST',
                data:{
                    id : 'user',
                    user_id : user_id
                },
                contentType: "application/x-www-form-urlencoded",
                success : function () {
                    $(self).parent().parent().hide('slow', function(){ $(self).parent().parent().remove(); });
                },
                error: function () {
                    alert("Delete Error!");
                }
            });
        }
    });
    $('button#button_role_user').click(function () {
        var user_id = $(this).val();
        var role = document.getElementById("role").value;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (confirm('Are you sure you want to change role of this user?')) {
            $.ajax({
                url: ajaxRemoveUri,
                type: 'POST',
                data:{
                    id : 'role',
                    user_id : user_id,
                    role : role
                },
                contentType: "application/x-www-form-urlencoded",
                success : function () {
                    window.location.reload();
                },
                error: function () {
                    alert("Change role failed!");
                }
            });
        }
    });
})(jQuery);