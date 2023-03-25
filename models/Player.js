const {Schema,model} = require('mongoose');

const PlayerSchema = Schema({

    name:{
        type: String,
        required: true
    },
    grl_player:{
        type: Number,
        required:true
    },
    nationality:{
        type: String,
        required: true,
    },
    nation_img:{
        type: String,
        required: true,
    },
    goodPosition:{
        type: [String],
        required: true,
    },
    midPosition:{
        type: [String],
        required: true,
    },
    badPosition:{
        type: [String],
        required: true,
    },
    img_avatar:{
        type: String,
        required: true,
    },

    img:{
        type: String,
        required: true,
    },
    trofeosEquipo:{
        type: Object,
        of:Number,
        required: true
    },
    trofeosPersonales:{
        type: Object,
        of: Number,
        required: true
    }


});

module.exports = model('Player', PlayerSchema);