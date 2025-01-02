const express= require("express");

const app= express();

app.use(express.json());

app.post("/", function(req,res) {
    const kidneys= req.body.kidneys;
    const kidneyLength= kidneys.length;

    res.send("ans:"+ kidneyLength);
});


//global catches
app.use(function(err,req,res,next) {
    res.json({
        msg:" something is wrong"
    })
})

app.listen(3001);