var express = require('express'),
app = express(),
engines = require('consolidate'),
var fetch = require('node-fetch');
var cheerio = require('cheerio');
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
var anArr=[];
function logResult(webpageTitle) {
    anArr.push(webpageTitle);
    console.log(anArr);
    
}


app.get('/I/want/title', function (req,res) {
    let urls= req.query.address;
    console.log(urls);
    if ( urls instanceof Array) {
        let Anarr=[];
        urls.forEach(element => {
            fetch(element)
            .then(res => res.text())
            .then(function (body) {
                const $ = cheerio.load(body);
                const webpageTitle = $("title").text();
                return webpageTitle;
            }).then(webpageTitle=>{
                Anarr.push(webpageTitle);
                return Anarr;
            }).then(Anarr=>{
                if(Anarr.length==urls.length){
                    return res.render('hello', { "name" :Anarr  });
                }

            })

        });

    }
    else{
        fetch(urls)
        .then(res => res.text())
        .then(function (body) {
            const $ = cheerio.load(body);
            const webpageTitle = $("title").text();
            console.log(webpageTitle);
            return res.render('hello', { "name" :webpageTitle ,"age" :32 });
    
        });
    }


})


app.get('*', function(req, res){
    return res.render('hello', { "name" : "ssss there " });
  });
  
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Express server listening on port %s.", port);
});