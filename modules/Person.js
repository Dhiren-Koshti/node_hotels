let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    email:{
        type:String,
        uniqe:true,
        required:true
    },

    workType:{
        type:String,
        enum:["Chef","Waiter","Manager"],
        required:true
    },

    address:{
        type:String,
        required:true
    },

    salary:{
        type:Number,
        required:true
    }
})

let Person = mongoose.model('Person',personSchema);
module.exports = Person;