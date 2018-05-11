    //     var currentLink="<?php echo $currentURL; ?>";
    $(document).ready(function(){
        //     $.ajaxSetup({
        //         headers: {
        //             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //         }
        //     });
        $("#searchBox").keyup(function(){
            var query = $("#searchBox").val();
            if(query.length <= 1){
                $("#response").hide();
            }
            if(query.length >= 2){
                $("#response").show();
                console.log(query);
                $.ajax(
                    {
                        url: '/search',
                        method: 'GET',
                        data: {
                            search:1,
                            q:query
                        },
                        success: function(data){
                            // console.log(data)
                            var max_results = 6;
                            var response = "<ul id='ulSearch'>";
                            response = response + "<li class='sug_row' style='font-size: larger font-style: italic; color: DarkGray'>"+'Films'+"</li>";
                            if(data[0].length > 0){
                                for(var i = 0; i < data[0].length && i < max_results; i++){
                                    var obj = data[0][i];
                                    response = response + "<li class='sug_row'><img src="+obj.img_path+" class='img_sug'><a style='cursor: pointer;color:lightgoldenrodyellow; margin-left:10px;' href=/movie/"+obj.id+">"+obj.name+"</a></li>";
                                    // console.log(obj.name);
                                }
                            }
                            response = response + "<li class='sug_row' style='font-size: larger font-style: italic; color: DarkGray'>"+'Actors'+"</li>";
                            if(data[1].length > 0){
                                for (var i = 0; i < data[1].length && i < max_results; i++) {
                                    var obj = data[1][i];
                                    response = response + "<li class='sug_row'><img src="+obj.img_path+" class='img_sug'><a style='cursor: pointer;color:lightgoldenrodyellow; margin-left:10px;' href=/people/"+obj.id+">"+obj.name+"</a></li>";
                                    // console.log(obj.name);
                                }
                            }
                            response = response + "</ul>";
                            console.log("length 1 "+data[0].length);
                            console.log("length 2 "+data[1].length);

                            $("#response").html(response);
                        },
                        dataType: 'Json'
                    }
                );
            }


        });
    });

$(window).click(function () {
    console.log('aaaaa');
    document.getElementById('ulSearch').style.display = "none";
});

$('#search_bar').click(function (event) {
    event.stopPropagation();
})


