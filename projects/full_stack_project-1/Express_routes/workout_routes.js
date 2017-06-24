var express = require("express");
var workoutR = express.Router();


var workout = require('../workout_schema/mongoose_schema.js');

workoutR.route('/')
.get(function(req, res){
    workout.find(function(err, workout){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(workout)
        }
    })
})

.post(function(req, res){
    var newWorkout = new workout(req.body);
    newWorkout.save();
    res.send(newWorkout);
})

workoutR.route('/:id')
.delete(function(req, res){
  workout.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.status(500).send(err)
    } res.send({
      message: "item deleted succesfully"
    })
  })
})

.put(function(req, res){
    workout.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, workout){
        if(err) {
            res.status(500).send(err)
        } else {
                res.send(workout);
        }
    })
});

module.exports = workoutR;
