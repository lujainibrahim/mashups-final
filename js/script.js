function loadData() {

    var $body = $('body');
    var $header = $('#nytimes-header');
    var $element = $('#nytimes-articles');
    var $intro = $('#intro');
    $element.text("");
    var food = $('#food').val();
    var address = food;

    $intro.text('Wanna Know More About ' + address + '?');

    var nytimesUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + food + '&sort=newest&api-key=5X0G0v1JcMaAAeA6KBXmAlR6SJPDGUiT'
    $.getJSON(nytimesUrl, function(data){
        $header.text('Here are some New York Times articles about ' + food);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $element.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
                '</li>');
        };
    }).error(function(e){
        $header.text('Sorry we found nothing :( Try another food item?' );

    })


    return false;
};

$('#form-container').submit(loadData);
