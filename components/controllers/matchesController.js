
const User = require('../models/usermodel');

//GET /
//Homepage

exports.homepage=async(req, res)=>{
    res.render('index', {title: 'GenX-Tournament - Home'})
}
exports.membersPage = async (req, res) => {
    // Fetch data or perform any required operations
    const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data
  
    // Render the members.ejs template and pass the members data
    res.render('members', { members });
  };

  exports.contactsPage = async (req, res) => {
    // Fetch data or perform any required operations
    const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data
  
    // Render the members.ejs template and pass the members data
    res.render('contact', { members });
  };

  exports.loginPage = async (req, res) => {
    // Logic for rendering the login page
    res.render('loginLayout/login', { title: 'GenX-Tournament - Login',layout: 'loginLayout/layout'});
  };
  exports.registerPage = async (req, res) => {
    // Logic for rendering the login page
    res.render('loginLayout/register', { title: 'GenX-Tournament - Register',layout: 'loginLayout/layout'});
  };

  exports.loginHandler = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user with the given username and password
      const user = await User.findOne({ username, password });
  
      if (user) {
        // User found, redirect to a success page or perform further actions
        res.redirect('/');
      } else {
        // User not found or invalid credentials, render the login page with an error message
        console.log('invalid re baba')
        res.render('loginLayout/login', { title: 'GenX-Tournament - Login', layout: 'loginLayout/layout', error: 'Invalid username or password' });
      }
    } catch (error) {
      // Handle any errors that occur during database operations or authentication
      console.error('Error:', error);
      res.render('error', { error });
    }
  };

  exports.registerHandler = async (req, res) => {
    const {name, username, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        // User with the same username already exists, render the registration page with an error message
        res.render('loginLayout/register', { title: 'GenX-Tournament - Register', layout: 'loginLayout/layout', error: 'Username already exists' });
      } else {
        // Create a new user
        const newUser = new User({ name,username, password });
        await newUser.save();
  
        // User successfully registered, redirect to a success page or perform further actions
        res.redirect('/');
      }
    } catch (error) {
      // Handle any errors that occur during database operations or registration
      console.error('Error:', error);
      res.render('error', { error });
    }
  };