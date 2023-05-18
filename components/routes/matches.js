const express=require('express')
const router=express.Router();
const matchesController=require('../controllers/matchesController')

//App routes

router.get('/', matchesController.homepage)
router.get('/members', matchesController.membersPage);
router.get('/contact', matchesController.contactsPage);
router.get('/login', matchesController.loginPage);
router.get('/register', matchesController.registerPage);
router.post('/login', matchesController.loginHandler); // Add this line for login form submission
router.post('/register', matchesController.registerHandler);

module.exports=router;