import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authorize = req.headers.token;

  if (!authorize) {
    return res.status(403).json("You are not athorize");
  }

  const token = authorize.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRETE, (err, user) => {
    if (err) return res.status(403).send("Invalid token");

    req.user = user;

    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not authorize");
    }
  });
};

export const VerifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not authorize");
    }
  });
};
