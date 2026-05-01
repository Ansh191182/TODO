const expreess = require("express");
const app = expreess();
app.use(expreess.json());

const cors = require("cors");
app.use(cors());
const PORT = 8000;

const db = require("./db");
db();

// router
const signup = require("./routes/SignUp");
// call
app.use("/", signup);

app.get("/", async (req, res) => {
  res.send("<h1> Jai shree Krishn</h1>");
});

app.listen(PORT, () => {
  console.log(`server is successfully running on PORT N0. ${PORT}`);
});
