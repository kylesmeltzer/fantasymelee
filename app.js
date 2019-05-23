const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});

//scraper:

// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

var request = require('request');
var cheerio = require('cheerio');

request('https://smash.gg/tournament/get-on-my-level-2019-canadian-fighting-game-championships/events/super-smash-bros-melee-singles/standings', function (error, response, html){
  if (!error && response.statusCode == 200){
    var $ = cheerio.load(html);
    $('tr.tappable-component').each(function(i, element){
      var team = $(this).find('.sggpQ_Ea').text();
      var tag = $(this).find('.sgg20NMf').text();
      var name = $(this).find('.sgg3t9su').text();
      var placement = $(this).find('h3').text();
      // Our parsed meta data object
      var metadata = {
        sponsor: team,
        tag: tag,
        name: name,
        placement: placement,
      };
      console.log(metadata);
    })
  }
});


