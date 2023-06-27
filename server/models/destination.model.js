const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    placeId:{
        type:String
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
    visitors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
}, {timestamps:true});

const Destination = mongoose.model('destination', DestinationSchema);

module.exports=Destination;