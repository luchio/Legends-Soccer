const {Schema,model} = require('mongoose');

const StadiumSchema = Schema({

    name:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    capacidad:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required:true
    },
    equipos:{
        type: [String],
        required: true,
    }
   


});

module.exports = model('Stadium', StadiumSchema);