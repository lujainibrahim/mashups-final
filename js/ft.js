$('#go').click(function() {
    var search = $('#entry').val();
    $.ajax({
        type: "POST",
        url: "ftapi.php",
        data: {
          search_term: search
        },
        success: function(data) {
            console.log("Success!");
            // console.log(data);
            var obj = JSON.parse(data);
            console.log(obj.results[0].results[0].title.title);
        },
        error: function() {
            console.log("Failed!");
        }
      });
});