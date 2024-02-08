
// ~ // --------------- DEPENDENCIES --------------- // ~ //
require("dotenv").config()
// const { PORT = 3000 } = process.env;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const CheeseRouter = require("./controllers/cheese")

const app = express();

// ~ // --------------- MIDDLEWARE --------------- // ~ //
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


app.use("/cheese", CheeseRouter)


// ~ // --------------- ROUTE --------------- // ~ //
app.get("/", (req, res) => {
    res.send(`Swimming @ Port...`);
  });
  

// ~ // --------------- SERVER LISTENER --------------- // ~ //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Swimming @ PORT ${PORT}`));

