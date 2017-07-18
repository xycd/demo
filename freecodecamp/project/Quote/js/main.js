function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "4fkOok1hyOmshfdV2DDTrjMpH9ozp1B6TnhjsnKgCh64b38C2A",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
        success: function(r) {
            
            $('#text').html(r.quote);
            $('#author').text(r.author);
        }
    });
}
$(document).ready(function() {
    getQuote();
    $("#newQuote").on('click', getQuote);
    $('#tweet-quote').on('click', function() {
    openURL('https://twitter.com/intent/tweet?hashtags=famousQuote&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
});
