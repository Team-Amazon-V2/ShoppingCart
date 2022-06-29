require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

app.use(express.static("public"));

app.post("/api/cart/post", async (req , res) => {
  try {
    const data = await db.query('INSERT INTO cart (id, name, email) VALUES ($1, $2, $3) RETURNING *;', [req.body.id, req.body.name, req.body.email])
    res.json(data.rows);
    //console.log(data.rows)
  } catch (error) {
    // res.send("some error")
    console.log(error)
  }
  
});

app.get("/api/cart", async (_ , res) => {
  try {
    const data = await db.query("SELECT * FROM cart")
    res.json(data.rows);
  } catch (error) {
    res.send("some error")
  }
});

app.patch('/api/cart/:id', async (req, res) => {
  try {
       //const data = await db.query('SELECT * FROM reports WHERE id=$1;', [req.body.id]);
    //  if (data.rows.length === 0){
    //      res.status(404)
    //      res.send('Not Found')
    //  } else {
         const name = req.body.name || data.rows[0].name;
         const email = req.body.email || data.rows[0].email;
         //const id = req.body.id || data.rows[0].id;
       const data = await db.query('UPDATE submitter SET (name, email) = ($1,$2) WHERE id=$3;', [name, email, req.params.id])
         res.json(data.rows);
    // ß }
  } catch (error) {
      res.send(error);
  }
})

app.delete('/api/reports/:id', async (req, res) => {
  try {
     const data = await db.query('DELETE FROM submitter WHERE id=$1;', [req.params.id]);
          res.json(data.rows);
      }
      catch (error) {
      res.json(error);
  }
})

app.listen(PORT, () => { 
  console.log(`listening on Port ${3000}`);
});