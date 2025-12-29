import mongoose from "mongoose";

const ecomShchema = new mongoose.Schema({
    titel : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
});

const Ecom = mongoose.model("ecom", ecomShchema);

export default Ecom;