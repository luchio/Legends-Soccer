const {Schema,model} = require('mongoose');

const LineupSchema = Schema({

    name:{
        type: String,
        required: true
    },
    img_lineup:{
        type: String,
        required:true
    },
    items:{
        type:[
        {
            position:{
                type: String,
                required:true
            },
            top:{
                type: Number,
                required:true
            },
            player: {
                type:{
                    name:{
                        type:String,
                        required: true
                    },
                    grl_player:{
                        type:Number,
                        required: true
                    },
                    img_avatar:{
                        type:String,
                        required: true
                    },
                    img:{
                        type:String,
                        required: true
                    }
                }
            },
            left:{
                type:{
                    xs:{
                        type: Number,
                        required:true,
                    },
                    sx:{
                        type: Number,
                        required:true,
                    },
                    md:{
                        type: Number,
                        required:true,
                    }
                } 
            },
        }
    ]
},


});

module.exports = model('Lineup', LineupSchema);