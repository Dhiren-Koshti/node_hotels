let mongoose = require("mongoose");

let MenuSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    taste:{
        type:String,
        enum: ['Sweet','Spicy','Sour'],
        required:true
    },

    is_drink:{
        type:Boolean,
        default:false
    },

    ingredients:{
        type:[String],
        default:[]
    },

    num_sales:{
        type:Number,
        default:0
    }
})

let menuItem = mongoose.model("Menu",MenuSchema);

module.exports = menuItem;