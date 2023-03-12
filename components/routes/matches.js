const express=require('express')
const router=express.Router();
const matchesController=require('../controllers/matchesController')

//App routes

router.get('/', matchesController.homepage)


module.exports=router;