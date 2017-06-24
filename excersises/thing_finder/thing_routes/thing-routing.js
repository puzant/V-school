var express = require("express");
var thingRouter = express.Router();
var things = require('../things_schema/schema.js');

thingRouter.route('/')
  .get(function(req, res){
    if(req.query.name==null){
    things.find(function(err, things){
        if(err){
            res.status(500).send(err);
        } else {
            
            res.send(things);
        }
    })}
    else
        {
    things.find({name:req.query.name},function(err, things){
        if(err){
            res.status(500).send(err);
        } else {
            
            res.send(things);
        }
    })}
   
})

.post(function(req, res){
    var newthing = new things(req.body);
    newthing.save(function(err, newthing){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(newthing);
        }
    });
});



module.exports = thingRouter;


