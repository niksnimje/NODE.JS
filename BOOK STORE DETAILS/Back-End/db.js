const mongoose = require('mongoose');



    const connection =  mongoose.connect('mongodb://127.0.0.1:27017/name');
    
    const bookSchema = new mongoose.Schema({
        title : String,
        author : String,
        price : Number,
        description : String,
        ISBN : String 
      },{ versionKey: false });
      
      const BookModal = mongoose.model('Book', bookSchema);


module.exports = {connection, BookModal} ;
