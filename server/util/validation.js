import { body, check, validationResult } from "express-validator";

const manageErrors = (cb) => (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  cb(errors.array(), req, res);
};

export const RegistrationValidator = [
  check("username")
    .notEmpty()
    .withMessage("Username is required")
    .trim()
    .escape(),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email")
    .trim()
    .escape(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be min 6 char")
    .trim()
    .escape(),
  manageErrors((error, req, res) => res.status(422).json({ error })),
];

export const LoginValidator = [
  check("username")
    .notEmpty()
    .withMessage("Username is required")
    .trim()
    .escape(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be min 6 char")
    .trim()
    .escape(),
  manageErrors((error, req, res) => res.status(422).json({ error })),
];

export const AddNoteValidator = [
  check("task")
    .notEmpty()
    .withMessage("Note should not be empty...")
    .trim()
    .escape(),
  manageErrors((error, req, res) => res.status(422).json({ error })),
];
