const express=require('express')
const cookieParser = require('cookie-parser');
const router=express.Router();
const matchesController=require('../controllers/matchesController')
const authenticateToken = require('../middlewares/authMiddleware');

//App routes
router.use(cookieParser());

router.get('/', matchesController.homepage)
router.get('/members', matchesController.membersPage);
router.get('/contact', matchesController.contactsPage);
router.get('/login', matchesController.loginPage);
router.get('/register', matchesController.registerPage);
router.post('/login', matchesController.loginHandler); // Add this line for login form submission
router.post('/register', matchesController.registerHandler);
router.get('/logout', (req, res) => {
    // Clear the token from the client-side
    res.clearCookie('token');
    // Redirect to the homepage
    res.redirect('/');
  });
// router.get('/protected', authenticateToken, matchesController.protectedPage);
// router.get('/protected', authenticateToken, matchesController.protectedPage);
// router.get('/another-protected', authenticateToken, matchesController.anotherProtectedPage);


module.exports=router;