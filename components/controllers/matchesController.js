
// const User = require('../models/usermodel');
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')


// //GET /
// //Homepage

// exports.homepage = async (req, res) => {
//   const isLoggedIn = req.username ? true : false;
//   const username = req.username || 'Guest';

//   res.render('index', { title: 'GenX-Tournament - Home', username, isLoggedIn });
// };
// exports.membersPage = async (req, res) => {
//   try {
//     // Fetch data or perform any required operations
//     const isLoggedIn = req.username ? true : false;
//     const username = req.username || 'Guest';
  
//     const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data

//     // Render the members.ejs template and pass the members data
//     res.render('members', { members, isLoggedIn, username });
//   } catch (error) {
//     console.error('Error:', error);
//     res.render('error', { error });
//   }
// };

// exports.contactsPage = async (req, res) => {
//   try {
//     // Fetch data or perform any required operations
//     const isLoggedIn = req.username ? true : false;
//   const username = req.username || 'Guest';

//     const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data

//     // Render the contact.ejs template and pass the members data
//     res.render('contact', { members, isLoggedIn, username });
//   } catch (error) {
//     console.error('Error:', error);
//     res.render('error', { error });
//   }
// };

//   exports.loginPage = async (req, res) => {
//     const { username, password } = req.body;

//   try {
//     // Find the user with the given username and password
//     const user = await User.findOne({ username });

//     if (user) {
//       // User found, compare the password
//       if (await bcrypt.compare(password, user.password)) {
//         // Generate JWT token
//         const token = jwt.sign( { username } , 'your-secret-key');

//         // Set the token in a cookie
//         res.cookie('token', token, { httpOnly: true });

//         // Render the homepage with the username
//          res.render('index', {
//           title: 'GenX-Tournament - Home',
//           username,
//           isLoggedIn: true,
//         });
//       }
//     }

//     // User not found or invalid credentials
//      res.render('loginLayout/login', {
//       title: 'GenX-Tournament - Login',
//       layout: 'loginLayout/layout',
//       error: 'Invalid username or password',
//     });
//   } catch (error) {
//     console.error('Error:', error);
//      res.render('error', { error });
//   }
// };

// exports.registerHandler = async (req, res) => {
//   const { name, username, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       // User with the same username already exists
//       return res.render('loginLayout/register', {
//         title: 'GenX-Tournament - Register',
//         layout: 'loginLayout/layout',
//         error: 'Username already exists',
//       });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ name, username, password: hashedPassword });
//     await newUser.save();

//     // Generate JWT token
//     const token = jwt.sign({ user: { username } }, 'your-secret-key');

//     // Set the token in a cookie
//     res.cookie('token', token, { httpOnly: true });

//     // Render the homepage with the username
//     res.render('index', {
//       title: 'GenX-Tournament - Home',
//       username,
//       isLoggedIn: true,
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     res.render('error', { error });
//   }
// };

const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.homepage = async (req, res) => {
  // try {
  
  //   const isLoggedIn = req.username ? true : false;
  //   const username = req.username || 'Guest';
  //   res.render('index', { title: 'GenX-Tournament - Home', isLoggedIn, username });
  // } catch (error) {
  //   console.error('Error:', error);
  //   res.render('error', { error });
  // }
  const token = req.cookies.token;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, 'your-secret-key');
      const username = decoded.username;

      res.render('index', {
        title: 'GenX-Tournament - Home',
        username,
        isLoggedIn: true,
      });
    } catch (error) {
      console.error('Error:', error);
      res.render('error', { error });
    }
  } else {
    res.render('index', { title: 'GenX-Tournament - Home', isLoggedIn: false });
  }

};

// exports.membersPage = async (req, res) => {
//   // try {
//   //   const isLoggedIn = req.username ? true : false;
//   //   const username = req.username || 'Guest';
//   //   const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data
//   //   res.render('members', { members, isLoggedIn, username });
//   // } catch (error) {
//   //   console.error('Error:', error);
//   //   res.render('error', { error });
//   // }

//   const token = req.cookies.token;

//   if (token) {
//     try {
//       // Verify the token
//       const decoded = jwt.verify(token, 'your-secret-key');
//       const username = decoded.username;
//       const members = ['John', 'Jane', 'Alice', 'Bob'];

//       res.render('members', {
//         username,
//         isLoggedIn: true,
//         members,
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       res.render('error', { error });
//     }
//   } else {
//     res.render('members', { isLoggedIn: false });
//   }
// };
// Assuming you have already parsed the JSON data and stored it in jsonData variable
const jsonData = {
  "players": [
    {
      "name": "MB CARRY",
      "Tracker Score": 182,
      "Round Win%": 50.7,
      "KAST": 63.4,
      "ACS": 169.0,
      "DDΔ/Round": -28,
      "WR": 63.4,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "Noah",
      "Tracker Score": 601,
      "Round Win%": 54.0,
      "KAST": 71.2,
      "ACS": 211.8,
      "DDΔ/Round": -0,
      "WR": 54.0,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "Bullseye",
      "Tracker Score": 297,
      "Round Win%": 52.6,
      "KAST": 62.3,
      "ACS": 201.7,
      "DDΔ/Round": -30,
      "WR": 51.9,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "GenXmicro",
      "Tracker Score": 978,
      "Round Win%": 60.9,
      "KAST": 78.1,
      "ACS": 288.6,
      "DDΔ/Round": 47,
      "WR": 63.4,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "Jio",
      "Tracker Score": 961,
      "Round Win%": 60.0,
      "KAST": 76.9,
      "ACS": 272.8,
      "DDΔ/Round": 41,
      "WR": 60.0,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "MILF LOVER",
      "Tracker Score": 974,
      "Round Win%": 55.3,
      "KAST": 78.7,
      "ACS": 283.1,
      "DDΔ/Round": 54,
      "WR": 55.3,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    },
    {
      "name": "PUNISHER22",
      "Tracker Score": 282,
      "Round Win%": 55.3,
      "KAST": 68.1,
      "ACS": 155.9,
      "DDΔ/Round": -40,
      "WR": 55.3,
      "avatar": "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Chamber_Trailer.jpg"
    }
  ]
};

exports.membersPage = async (req, res) => {
  const token = req.cookies.token;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, 'your-secret-key');
      const username = decoded.username;

      // Pass the JSON data to the EJS template
      res.render('members', {
        username,
        isLoggedIn: true,
        players: jsonData.players,
      });
    } catch (error) {
      console.error('Error:', error);
      res.render('error', { error });
    }
  } else {
    // If there's no token, render the page with isLoggedIn set to false
    res.render('members', { isLoggedIn: false, players: jsonData.players, });
  }
};

exports.contactsPage = async (req, res) => {
  // try {
  //   const isLoggedIn = req.username ? true : false;
  //   const username = req.username || 'Guest';
  //   const members = ['John', 'Jane', 'Alice', 'Bob']; // Example data
  //   res.render('contact', { members, isLoggedIn, username });
  // } catch (error) {
  //   console.error('Error:', error);
  //   res.render('error', { error });
  // }
  const token = req.cookies.token;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, 'your-secret-key');
      const username = decoded.username;
      const members = ['John', 'Jane', 'Alice', 'Bob'];

      res.render('contact', {
        username,
        isLoggedIn: true,
        
      });
    } catch (error) {
      console.error('Error:', error);
      res.render('error', { error });
    }
  } else {
    res.render('contact', { isLoggedIn: false });
  }
};

exports.loginPage = async (req, res) => {
  // Logic for rendering the login page
  res.render('loginLayout/login', { title: 'GenX-Tournament - Login', layout: 'loginLayout/layout' });
};

exports.registerPage = async (req, res) => {
  // Logic for rendering the register page
  res.render('loginLayout/register', { title: 'GenX-Tournament - Register', layout: 'loginLayout/layout' });
};

exports.loginHandler = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user with the given username and password
    const user = await User.findOne({ username });

    if (user) {
      // User found, compare the password
      if (await bcrypt.compare(password, user.password)) {
        // Generate JWT token
        const token = jwt.sign({ username }, 'your-secret-key');

        // Set the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        // Render the homepage with the username
        res.render('index', {
          title: 'GenX-Tournament - Home',
          username,
          isLoggedIn: true,
        });
      } else {
        console.log('Invalid password');
        res.render('loginLayout/login', {
          title: 'GenX-Tournament - Login',
          layout: 'loginLayout/layout',
          error: 'Invalid password',
        });
      }
    } else {
      console.log('User not found');
      res.render('loginLayout/login', {
        title: 'GenX-Tournament - Login',
        layout: 'loginLayout/layout',
        error: 'User not found',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.render('error', { error });
  }
};

exports.registerHandler = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // User with the same username already exists
      res.render('loginLayout/register', {
        title: 'GenX-Tournament - Register',
        layout: 'loginLayout/layout',
        error: 'Username already exists',
      });
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ name, username, password: hashedPassword });
      await newUser.save();

      // Generate JWT token
      const token = jwt.sign({ username }, 'your-secret-key');

      // Set the token in a cookie
      res.cookie('token', token, { httpOnly: true });

      // Render the homepage with the username
      res.render('index', {
        title: 'GenX-Tournament - Home',
        username,
        isLoggedIn: true,
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.render('error', { error });
  }
};

