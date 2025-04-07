const express = require('express');
const router = express.Router();
const {
    allCars,
    addCar,
    getCar,
    searchCars,
    updateCar,
    deleteCar,
    myCars
} = require('../controllers/carscontroller');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.get('/', allCars); 
router.get('/search', searchCars); 
router.post('/', isAuthenticated, addCar); 
router.get('/my', isAuthenticated, myCars); 
router.get('/:id', isAuthenticated, getCar); 
router.put('/:id', isAuthenticated, updateCar); 
router.delete('/:id', isAuthenticated, deleteCar); 

module.exports = router;
