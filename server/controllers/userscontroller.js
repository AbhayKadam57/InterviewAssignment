import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    const isEmailRegistered = await User.findOne({ email: email });

    if (user) {
      return res.status(401).send({
        error: [{ path: "username", msg: "Username is already registered " }],
      });
    }

    if (isEmailRegistered) {
      return res.status(401).send({
        error: [{ path: "email", msg: "Email is already registered" }],
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedpassword,
    });

    await newUser.save();

    res.status(200).send("Registration is successfull, Now Please Login");
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
      return res
        .status(401)
        .send({ error: [{ path: "username", msg: "User not found" }] });
    }

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isCorrectPassword) {
      return res
        .status(401)
        .send({ error: [{ path: "password", msg: "Invalid Password" }] });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRETE,
      { expiresIn: "7d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).send({ token, ...others });
  } catch (e) {
    res.status(200).send("Something went wrong");
  }
};

export const AddNote = async (req, res) => {
  const { task, createdAt } = req.body;
  console.log(task);

  const id = req.params.id;

  try {
    const result = await User.updateOne(
      { _id: id },
      {
        $push: {
          notes: { task: task, createdAt: createdAt },
        },
      }
    );

    res.status(200).send({ task: task, createdAt: createdAt });
  } catch (e) {
    res.status(200).send("Message added successfully");
  }
};

export const GetAllNotes = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findOne({ _id: id }, { notes: 1, _id: 0 });

    res.status(200).send(result.notes);
  } catch (e) {
    res.status(500).send("Somethinh went wrong...");
  }
};
