import express from "express";
import dotenv from "dotenv";
import bcrypt, { hash } from "bcrypt";
import User from "../Schema/userSchema.js";
import jwt from "jsonwebtoken";
const router = express.Router();
dotenv.config();
const KEY = process.env.SECRET_KEY;

router.get("/authenticate", isAuthenticated, (req, res) => {
  const {token , user} = req.body;
  return res.status(200).json({success : true , message : "Authenticated" , token});
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Username or password Incorrect" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("Password mismatch");
      return res.status(401).json({ message: "Incorrect password or username" });
    }

    const token = jwt.sign({ email: email }, KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    console.log("Logged In");
    return res.status(200).json({ message: "Logged In" });

  } catch (error) {
    console.error("Error in Login path", error.message);
    return res.status(500).json({ message: "Server Error" });
  }
})
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const find = await User.findOne({ email });
  if (!find) {
    try {
      if(email === "" && password === ""){
        return res.status(404).json({success : false , message : "Invalid Input"});
      }
      const user = await User.create({ email, password: hash });
      if (user) {
        const token = jwt.sign({ email: email }, KEY, { expiresIn: "1h" });
        res.cookie("token", token,{
          secure:true,
          httpOnly:true
        });
        console.log(user);
        res.status(200).json({ success : true , message: "userCreated" });
      }
    } catch (error) {
      console.log("Error in signup path", error.message);
    }
  } else {
    console.log("User Aready Exist");
    res.status(500).json({ message: "User Already Exist" });
  }
});

router.get("/logout", (req, res,next) => {
  console.log("logged out");
  res.cookie("token", "");
  res.status(200).json({ message: "Logged Out" });
  next();
});

async function isAuthenticated(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    try {
      const data = jwt.verify(token, KEY);
      const email = data.email;
      const user = await User.findOne({ email });
      if (user) {
        req.body = {user, token};
        console.log("api hit hau")
        next();
      } else {
        res.status(500).json({ message: "User Not Found" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Invalid Token" });
    }
  } else {
    console.log("Kindly Login or Register");
    res.status(500).json({ message: "Kindly Login" });
  }
}

export default router;