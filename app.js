const express = require("express");
const connectDb = require("./config/dbConnection");
const router = require("./routes/api");
const enquiryRouter = require("./routes/enquiry");
const destinationRouter = require("./routes/destination");
const quotationRouter = require("./routes/quotation");
require("dotenv").config();
const cors = require("cors");

const app = express();
connectDb(); //database connection method
const PORT = process.env.PORT | 5001;

// middilewares
// const corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(
  cors({ origin: "https://holidayheavens.vercel.app", credentials: true })
);

// app.use(
//   cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     optionsSuccessStatus: 204,
//     credentials: true,
//   })
// );

// app.use(cors(corsOptions));

app.use(express.json()); //body parser for request bodies
app.use("/api", router); // for route /api router will be called
app.use("/api/enquiry", enquiryRouter);
app.use("/api/destination", destinationRouter);
app.use("/api/quotation", quotationRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server started!!! Holiday Heavens server started");
});

// server listening to port specified in env file
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
// console.log("test script");
