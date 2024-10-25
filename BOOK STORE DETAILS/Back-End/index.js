const express=require("express")
const cors = require('cors')

const {connection, BookModal} = require("./db");


const app=express()
app.use(cors())

app.use(express.json());

app.get("/",(req,res)=>{

    res.send("okay")
})

// Add Books

app.post('/addbooks', async (req, res) => {
    try {
      const { title, author, price, description ,ISBN , image } = req.body;
      const book = new BookModal({ title, author, price, description,ISBN,image });

      await book.save()
      res.status(201).json(book); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  // Get Books

  app.get('/getbooks', async (req, res) => {
    try {
      const book = await BookModal.find(); 
      res.status(200).json(book);
      // res.json(book)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  // Get User BY ID
  app.get('/books/:id', async (req, res) => {
    try {
      const book = await BookModal.findById(req.params.id); // Retrieve user by ID
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  
  
  // UPDATE: Update a book by ID
  app.patch('/book/:id', async (req, res) => {
    try {
      const { title, author, price, description, ISBN, image } = req.body;
      const user = await BookModal.findByIdAndUpdate(
        req.params.id,
        { title, author, price, description, ISBN, image },
       
      );
      res.status(200).json({message:"Book Detail's Updated !!"})
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

  // DELETE: Delete a book by ID
  app.delete('/book/:id', async (req, res) => {
    try {
      const user = await BookModal.findByIdAndDelete(req.params.id); 
     
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });





app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Data Base Connect")

        console.log(`run port : ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})