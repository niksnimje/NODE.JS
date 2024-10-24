const mongoose = require('mongoose');
require('dotenv').config()

const MONGOURL=process.env.MONGO_URL

    const connection =  mongoose.connect(MONGOURL);
    
    const bookSchema = new mongoose.Schema({
        title : String,
        author : String,
        price : Number,
        description : String,
        ISBN : String 
      },{ versionKey: false });
      
      const BookModal = mongoose.model('Book', bookSchema);


module.exports = {connection, BookModal} ;
