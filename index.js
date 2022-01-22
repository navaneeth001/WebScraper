const express = require('express');
const jsdom = require("jsdom");
const request = require('request-promise')
const app = express();
app.use(express.json());
 port=8000
 app.set('port',port)

var finalArray=[];

const temp=request("https://time.com",(error,response,html)=>{
    if(!error&&response.statusCode==200)
    {
        var dom = new jsdom.JSDOM(html);
        const resultList=dom.window.document.querySelector("section[data-module_name='Latest Stories']").querySelector("ol")
        Array.from(resultList.children).forEach((child, index) => {
            var temp =child.querySelector("article").querySelector("div").querySelector("h2").querySelector("a")
            finalArray.push(
                {
                    title:child.querySelector("article").querySelector("div").querySelector("h2").querySelector("a").innerHTML,
                    link:temp.getAttribute("href")
                }
            )
            });   
            console.log('final result is ',finalArray) 
    }
})

app.get('/getTimes.com', (req, res) => {
res.send(finalArray)
});

const server = app.listen(port, () => {
    console.log("🚀 Server ready at Port " + port);
  });