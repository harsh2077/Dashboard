// dataController.js

const Data = require('../models/Data');

exports.getData = async (req, res) => {
    try {
        const { endYear, country, source, pestle } = req.query;
        const filter = {};

        if (endYear) {
            filter.end_year = { $lte: parseInt(endYear) };
        }

        if (country) {
            filter.country = country; // Adjust filter to match the country field
        }
        if (source) {
            filter.source = source; // Adjust filter to match the source field
        } if (pestle) {
            filter.pestle = pestle; // Adjust filter to match the pestle field
        }
        const data = await Data.find(filter).limit(3000);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// exports.getCountry = async (req, res) => {
//     try {
//         const countries = await Data.distinct('country');
//         res.json(countries);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

exports.addData = async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const savedData = await Data.insertMany(req.body);
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
