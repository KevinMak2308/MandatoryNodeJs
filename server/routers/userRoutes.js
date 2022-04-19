import bcrypt from "bcrypt";
import { Router } from "express";
import User from "../database/createSchema.js";


const router = Router();

  router.post("/signup", async (req, res) => {
    const body = req.body;

    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    // Creating a new mongoose user from input data
    const user = new User(body);

    // Generating salt to hash password
    const salt = await bcrypt.genSalt(10);

    // Setting user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));


  });


  router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      // check user password with hashed password stored in the database
     
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {

        req.session.name = user.email;
        console.log('req.session: ' + req.session.name);
        res.status(200).json({ message: "Valid password" });
      } else {

        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  });


  router.post("/logout", (req, res) => {
    if(req.session.name) {
      req.session.destroy
      res.status(200).json({ message: "You've been logged out" });

    } else {
      res.status(400).json({ error: "Unable to logout" });
    }

  });

  
   

  export default router;