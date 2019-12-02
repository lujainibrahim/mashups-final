$('#go').click(function(){
        var topic =  $('#entry').val();
        console.log(topic);
        topic = topic.replace(/ /g,  "%20");
        topic = topic.replace(":", "%3A");

        var path ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&sort=newest&api-key=KPy5JG9ziKw1HNABXJqS5cOzXsWMhhfF";
        var selector_string = "#result";
        var $element = $(selector_string)

        $.getJSON(path, function(data){
            articles = data.response.docs;
           for (var i = 0; i < 3; i++) {
                var article = articles[i];
                $element.append('<li class="article">'+
                    '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                    '<p>' + article.snippet + '</p>'+
                    '</li>');
                  }
                }
              )
});
