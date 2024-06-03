const { json } = require("body-parser");
const express=require("express")
const https=require('https')
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
    
})

app.post("/",(req,res)=>{
    console.log("the request is recived");
    console.log(req.body.CityName)
    const query=req.body.CityName;
    const apikey='appid=342f3ab230ea03d100b18213676af0dd'
    const url='https://api.openweathermap.org/data/2.5/weather?q='+query+'&'+apikey+'&units=metric'
    https.get(url,(responce)=>{
        // console.log(responce.statusCode)
        responce.on('data',(data)=>{
            // console.log(data)
           const weatherdata= JSON.parse(data);
           console.log(weatherdata);
           const temp=weatherdata.main.temp
           const discription=weatherdata.weather[0].description;
           console.log(temp );
           console.log(discription)
           res.write("<h1 style='display: flex;align-items: center; color:red;,font-size:50px;'>the temprature in "+query+" is "+temp+" degree celcius</h1>")
           res.write("<p style='color:red,font-size:25px,font-weight:500;'>the weather discription is "+discription+"<p/>")
        })
    })
    

})


app.listen(3006,()=>{
    console.log("our sevwer is ;listening at port: ",3006)
})



