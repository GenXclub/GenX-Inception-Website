const jwtSecret = process.env.JWT_SECRET || 'your-secret-here';

const authenticateToken = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.headers['authorization'].split(' ')[1];

  // Try to verify the token
  try {
    const decoded = jwt.verify(token, jwtSecret);

    // If the token is valid, set the user in the request context
    req.user = decoded;

    // Continue with the request
    next();
  } catch (error) {
    // If the token is invalid, return an error
    res.status(401).send('Unauthorized');
  }
};

module.exports = authenticateToken;