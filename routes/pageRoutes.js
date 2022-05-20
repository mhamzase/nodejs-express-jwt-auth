const { Router } = require('express');
const pageController = require('../controllers/pageController');
const {requireAuth} = require('../middleware/authMiddleware');
const router = Router();


router.get('/',pageController.home);
router.get('/smoothies',requireAuth,pageController.smoothies);


module.exports = router;