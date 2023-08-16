const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "You are not authenticated."
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT);
    if (user) {
      req.userId = user.id;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: "You are not authorized."
    });
  }
};

module.exports = { verifyToken };
