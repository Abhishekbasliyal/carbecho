const CAR = require('../models/carsmodel');
const User = require('../models/usersmodel');

const allCars = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 50;
        const skip = (page - 1) * limit;

        let filterQuery = {};

        if (req.query.brand) filterQuery.Brand = new RegExp(req.query.brand, 'i');
        if (req.query.minPrice) filterQuery.AskPrice = { $gte: parseInt(req.query.minPrice) };
        if (req.query.maxPrice) filterQuery.AskPrice = { ...filterQuery.AskPrice, $lte: parseInt(req.query.maxPrice) };
        if (req.query.year) filterQuery.Year = req.query.year;
        if (req.query.location) filterQuery.Location = new RegExp(req.query.location, 'i');
        if (req.query.mileage) filterQuery.kmDriven = { $lte: parseInt(req.query.mileage) };

        const cars = await CAR.find(filterQuery).skip(skip).limit(limit).lean();
        const totalCars = await CAR.countDocuments(filterQuery);
        const totalPages = Math.ceil(totalCars / limit);
        const filterCars = cars.map(({ _id, Brand, Model, AskPrice }) => ({ _id, Brand, Model, AskPrice }));

        res.status(200).json({ page, totalPages, totalCars, filterCars });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const searchCars = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ Message: "Search query is required" });

        const cars = await CAR.find({
            $or: [
                { Brand: new RegExp(query, 'i') },
                { Model: new RegExp(query, 'i') },
                { AdditionalInfo: new RegExp(query, 'i') }
            ]
        });

        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const addCar = async (req, res) => {
    try {
        const carData = { ...req.body, user_id: req.user.userId };
        const car = await CAR.create(carData);
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const getCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await CAR.findById(id);
        if (!car) return res.status(404).json({ message: "Car not found" });

        const owner = await User.findOne({ userId: car.user_id }).select('-password');
        res.status(200).json({ car, owner });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const car = await CAR.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "Car not found" });

        if (car.user_id !== req.user.userId) return res.status(403).json({ message: "Unauthorized" });

        const updated = await CAR.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        const car = await CAR.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "Car not found" });

        if (car.user_id !== req.user.userId) return res.status(403).json({ message: "Unauthorized" });

        await car.deleteOne();
        res.status(200).json({ message: "Car deleted" });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const myCars = async (req, res) => {
    try {
        const cars = await CAR.find({ user_id: req.user.userId });
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

module.exports = { allCars, addCar, getCar, searchCars, updateCar, deleteCar, myCars };
