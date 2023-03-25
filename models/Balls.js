const {Schema,model} = require('mongoose');

const BallSchema = Schema({

    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true,
    },
    mundial:{
        type: String,
        required: true,
    },


});

module.exports = model('Balls', BallSchema);