$(document).ready(function () {
    console.log("ready!");

    $('#searchButton').on('click', function () {

        var searchTerm = $('#exampleFormControlTextarea1').text();
        searchArticle(searchTerm, 10, 2012, 2019);

    });

    function searchArticle(searchTerm, totalRecords, startYear, endYear) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
            "q=" + searchTerm +
            "&pub_year=" + startYear +
            "&api-key=4AKA9n1dQpNxFY6AmRYzjBkXNvuc5zZ1";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            $.each(response.response.docs, function (index, article) {

                var headLine = article.headline.main;
                var articleDiv = $('<div>');
                var headlineElement = $('<p>' + headLine + "</p>");
                articleDiv.append(headlineElement);
                $('.article').append(articleDiv);

            });
        });
    }

    $('#clearButton').on('click', function() {
        $('.article').empty();
    });

});