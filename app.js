let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
url += '?' + $.param({
  'api-key': "c68026da5e154175ab802b832de9e9a2"
})

$.getJSON(url)
.done(function(data){
    let timesData = data.response.docs[0].headline.main
    $('#pinHere').text(timesData);
})
.fail(function(data){
    console.log('there was a problem' + data);
});
