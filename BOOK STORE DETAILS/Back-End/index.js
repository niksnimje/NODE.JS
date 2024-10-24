const express=require("express")

const connection = require("./db")

const app=express()

app.use(express.json());

app.get("/",(req,res)=>{

    res.send("okay")
})

app.post('/books', async (req, res) => {
    try {
      const { title, author, price, description,ISBN } = req.body;
      const book = new connection.Book({ title, author, price, description,ISBN });

      await res.status(201).json(book); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  app.get('/books', async (req, res) => {
    try {
      const books = await books.find(); 
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

app.listen(8000,async()=>{
    try {
        await connection
        console.log("Run port 8000")
    } catch (error) {
        console.log(error)
    }
})