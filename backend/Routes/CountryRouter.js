// const { addCountry, getCountries } = require('../Controllers/CountryControllers');
// const router = express.Router();

// router.get('/', getCountries);
// router.post('/add', addCountry);

// module.exports = router;

const express = require('express');
const router = express.Router();
const Country = require('../Models/Country');

// Add country
router.post('/add', async (req, res) => {
  const { name } = req.body;
  try {
    const newCountry = new Country({ name });
    await newCountry.save();
    res.status(201).json({ message: 'Country created successfully', newCountry });
  } catch (error) {
    res.status(500).json({ message: 'Error creating country', error });
  }
});

// Get all countries
router.get('/view', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries',error });
  }
});

module.exports = router;



