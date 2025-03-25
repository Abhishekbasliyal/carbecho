const express = require('express');
const app= express();
const router = express.Router();
const {allCars, addCar, getCar, searchCars}= require('../controllers/carscontroller');



router.route('/').get(allCars).post(addCar);
router.route('/:id').get(getCar);
router.route('/search').get(searchCars);

module.exports = router;
