var mongoose = require('mongoose');

var peopleSchema = new mongoose.schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    
    age: {
        type: Number,
        required: true
    },
    
    adrees: {
        Stree: {
            type: String,
            required: true,
        },
        city: String,
        building: String,
        country: String,
        floor: Number
    },
});

module.exports = mongoose.model("People", PeopleSchema);
