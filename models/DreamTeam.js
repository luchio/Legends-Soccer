const {Schema,model, default: mongoose} = require('mongoose'); 



const DreamTeamSchema = Schema({
    name:{
        type:String,
        required: true
    },
    grl_team:{
        type:Number,
        required: true
    },
    lineup: {
        name:{
            type:String
        },

        img_lineup:{
            type:String   
        },
        items:{
            type:[
                {
                    position:{
                        type:String,
                        required: true
                    },
                    top:{
                        type:Number,
                        required: true
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
                    player: {
                        type: Schema.Types.ObjectId,
                        ref: 'Player',
                        required: true 
                    }
                }
            ]
        }
        
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
});

//para poder cambiar los atributos del json. no en la bd, no queremos que se llame _id sino id
DreamTeamSchema.method('toJSON',function() {
    const {__v,_id,...object} =  this.toObject();
    object.id = _id;
    return object;
 })
 

module.exports = model('DreamTeam', DreamTeamSchema);