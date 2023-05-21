const jwt = require('jsonwebtoken');

// Middleware to authenticate the JWT token
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    // Verify the token
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
      if (err) {
        // Token verification failed
        res.redirect('/login'); // or handle the error in a different way
      } else {
        // Token is valid, extract the username from the decoded token
        req.username = decodedToken.username;

        next();
      }
    });
  } else {
    // Token not found, user is not authenticated
    // res.redirect('/login'); // or handle the authentication failure in a different way
    next();
  }
};

module.exports = authenticateToken;