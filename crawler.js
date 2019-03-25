var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            
            let itens = $("#threads").find(".title")

            for(let i = 0; i < itens.length; i++)
            {
                console.log(itens[i].children[0].data)
            }
            
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://www.hardmob.com.br/forums/407-Promocoes');