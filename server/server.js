import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session";
app.use(session({secret: 'my cookie', saveUninitialized: true,resave: true}));

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch (console.error);

  import userRouter from "./routers/userRoutes.js";
  app.use("/auth", userRouter);


  //Postman Test Endpoint
  app.post("/", (req, res) => {
    if (req.session.name) {
      //res.status(200).json({ message: "Welcome User" });
      res.json(req.session.name);

    } else {
      res.status(400).json({ error: "Unable to found User" });
    }
  })

  import contactRouter from "./routers/contact.js";
  app.use(contactRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Starting server on port:", PORT);
});