function loadData() {

    var $body = $('body');
    var $header = $('#nytimes-header');
    var $element = $('#nytimes-articles');
    var $intro = $('#intro');
    $element.text("");
    var topic = $('#topic').val();
    var address = topic;

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + topic + '&sort=newest&api-key=QAdGEFleVAbnIm0FVAXfWo5ixuFJooLM'
    $.getJSON(nytimesUrl, function(data){
        $header.text('New York Times articles on ' + topic);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $element.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
                '</li>');
        };
    }).error(function(e){
        $header.text('Sorry we found nothing' );

    })


    return false;
};

$('#form-container').submit(loadData);
