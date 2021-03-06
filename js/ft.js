var $element = $('#results');
$element.text("");

$('#go').click(function() {
    var search = $('#entry').val();
    $.ajax({
        type: "POST",
        url: "./php/ftapi.php",
        data: {
          search_term: search
        },
        success: function(data) {
            console.log("Success!");
            // console.log(data);
            var object = JSON.parse(data);
            $element.html("");
            for (var i = 0; i < 3; i++) { // To Be Changed
              $element.append('<li class="article">'+
              '<a href="'+object.results[0].results[i].location.uri+'" target="_blank">'+object.results[0].results[i].title.title+'</a>'+
              '<p>' + object.results[0].results[i].summary.excerpt + '</p>'+
              '</li>');
            }
        },
        error: function() {
            console.log("Failed!");
        }
      });
});
