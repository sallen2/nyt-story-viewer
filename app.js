let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
url += '?' + $.param({
  'api-key': "c68026da5e154175ab802b832de9e9a2",
})
let numberOfRecords = 7;
function printHeadlines(){
    $.getJSON(url)
    .done(data => {
        let timesData = data.response.docs
        console.log(timesData);
        timesData.forEach((nytData, i) => {
            if(i < numberOfRecords){
                let headlines = $('<p>')
                headlines.text(nytData.headline.main);
                $('#pinHere').append(headlines);
            }
        });
    })
    .fail(data => {
        console.log('there was a problem' + data);
    });
}

$(document).ready(()=>{
    printHeadlines();
})

