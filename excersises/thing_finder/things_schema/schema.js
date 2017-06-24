var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Schema", thingSchema);