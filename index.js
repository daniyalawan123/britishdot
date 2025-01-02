import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "britishdot",
  password: "dani.awan",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
    try{
  const result = await db.query("SELECT * FROM products");
  res.status(200).json(results.rows);
    }
    catch(error){
        res.status(500).error;
    }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
