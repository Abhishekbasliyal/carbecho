const CAR = require('../models/carsmodel');

const allCars = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;  
        const limit = 50;  
        const skip = (page - 1) * limit; 

    
        let filterQuery = {};

        
        if (req.query.brand) {
            filterQuery.Brand = new RegExp(req.query.brand, 'i');  
        }
        if (req.query.minPrice) {
            filterQuery.AskPrice = { $gte: parseInt(req.query.minPrice) };  
        }
        if (req.query.maxPrice) {
            filterQuery.AskPrice = { ...filterQuery.AskPrice, $lte: parseInt(req.query.maxPrice) }; 
        }
        if (req.query.year) {
            filterQuery.Year = req.query.year;  
        }
        if (req.query.location) {
            filterQuery.Location = new RegExp(req.query.location, 'i'); 
        }
        if (req.query.mileage) {
            filterQuery.kmDriven = { $lte: parseInt(req.query.mileage) };  
        }

        
        const cars = await CAR.find(filterQuery)
            .skip(skip)
            .limit(limit);

        
        const totalCars = await CAR.countDocuments(filterQuery);
        const totalPages = Math.ceil(totalCars / limit);  


        res.status(200).json({
            page,
            totalPages,
            totalCars,
            cars
        });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};


const searchCars = async (req, res) => {
    try {
        const query = req.query.q;  

        if (!query) {
            return res.status(400).json({ Message: "Search query is required" });
        }

        
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


const addCar = async (req,res)=>{
    try{
        const car = await CAR.create(req.body);
        res.status(201).json(car);7  
        }catch(err){
            res.status(500).json({Message: err.Message});
        }
    }

    const getCar= async(req,res)=>{
        try{
            const id= req.params.id;

        const car = await CAR.findOne({_id :id});
        res.status(200).json
        }catch(err){
            res.status(500).json({Message: err});
        }
    }

    module.exports ={allCars, addCar, getCar, searchCars};