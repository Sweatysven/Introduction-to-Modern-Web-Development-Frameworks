const mongoose = require('mongoose');
// object from Schema
const Schema = mongoose.Schema;

// create a Schema. Schema takes an object that descibes what there is going to be sent to it.
let todoSchema = new Schema({
    description: {
        type: String,
        required: true
    }, 
    done: {
        type: Boolean,
        default: false
    }
});

//export it
module.exports = mongoose.model('Todo', todoSchema);