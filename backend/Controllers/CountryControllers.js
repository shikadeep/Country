
// // const Country = require('../Models/Country');
// // // Get all countries
// // const getCountries = async (req, res) => {
// //   try {
// //     const countries = await Country.find();
// //     res.status(200).json(countries);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server Error' });
// //   }
// // };

// // // Add new country
// // const addCountry = async (req, res) => {
// //   const { name, statesCount, districtsCount } = req.body;

// //   try {
// //     const country = new Country({ name, statesCount, districtsCount });
// //     await country.save();
// //     res.status(201).json({ message: 'Country added successfully', country });
// //   } catch (error) {
// //     res.status(400).json({ message: 'Error adding country' });
// //   }
// // };

// // module.exports = { getCountries, addCountry };

// const Country = require('../Models/Country');
// //GET COUNTRIES
// exports.getAllCountries = async (req, res) => {
//   try {
//     const countries = await Country.find();
//     res.status(200).json(countries);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch countries' });
//   }
// };
// //POST COUNTRIES
// exports.addCountry = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const country = new Country({ name});
//     await country.save();

//     res.status(201).json({ message: 'Country added successfully', country });
//   } catch (err) {
//     res.status(400).json({ message: 'Error adding country'});
//   }
// };
