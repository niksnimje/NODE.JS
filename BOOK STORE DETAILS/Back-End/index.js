const express=require("express")

const connection = require("./db");


const app=express()

app.use(express.json());

app.get("/",(req,res)=>{

    res.send("okay")
})

app.post('/books', async (req, res) => {
    try {
      const { title, author, price, description ,ISBN } = req.body;
      const book = new connection.BookModal({ title, author, price, description,ISBN });

      await book.save()
      res.status(201).json(book); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  // app.get('/books', async (req, res) => {
  //   try {
  //     const books = await books.find(); 
  //     res.status(200).json(books);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });
  

  // // Update
  // app.get('/books/:id', async (req, res) => {
  //   try {
  //     const user = await User.findById(req.params.id); // Retrieve user by ID
  //     if (!user) return res.status(404).json({ message: 'User not found' });
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });
  
  // // UPDATE: Update a user by ID
  // app.put('/users/:id', async (req, res) => {
  //   try {
  //     const { name, email, password, age } = req.body;
  //     const user = await User.findByIdAndUpdate(
  //       req.params.id,
  //       { name, email, password, age },
       
  //     );
     
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // });
  
  // // DELETE: Delete a user by ID
  // app.delete('/users/:id', async (req, res) => {
  //   try {
  //     const user = await User.findByIdAndDelete(req.params.id); // Delete user by ID
     
  //     res.status(200).json({ message: 'User deleted successfully' });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });





app.listen(8000,async()=>{
    try {
        await connection
        console.log("Data Base Connect")

        console.log("Run port 8000")
    } catch (error) {
        console.log(error)
    }
})