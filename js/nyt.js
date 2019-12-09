$('#go').click(function(){
        var topic =  $('#entry').val();
        console.log(topic);
        topic = topic.replace(/ /g,  "%20"); // replace any spaces
        topic = topic.replace(":", "%3A"); // replace any colons

        var path ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&sort=newest&api-key=QAdGEFleVAbnIm0FVAXfWo5ixuFJooLM"; // API call
        console.log(path);
        var selector_string = "#result";
        var $element = $(selector_string)

        $.getJSON(path, function(data){
           $element.html(""); // clear the div
            articles = data.response.docs;
           for (var i = 0; i < 3; i++) {
                var article = articles[i];
                $element.append('<li class="article">'+
                    '<a href="'+article.web_url+'" target="_blank">'+article.headline.main+'</a>'+
                    '<p>' + article.snippet + '</p>'+
                    '</li>'); // append the div in the main html page to display results
                  }
                }
              )
});
