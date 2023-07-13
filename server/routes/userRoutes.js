import express from "express";
import {
  AddNoteValidator,
  LoginValidator,
  RegistrationValidator,
} from "../util/validation.js";
import {
  AddNote,
  GetAllNotes,
  LoginUser,
  Register,
} from "../controllers/userscontroller.js";
import { verifyUser } from "../util/verifyToken.js";

const router = express.Router();

//Register User

router.post("/register", RegistrationValidator, Register);

//Login User

router.post("/login", LoginValidator, LoginUser);

//Add note

router.post("/addnote/:id", AddNoteValidator, verifyUser, AddNote);

//Get user message

router.get("/getnotes/:id", verifyUser, GetAllNotes);

export default router;
