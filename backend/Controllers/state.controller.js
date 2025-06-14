// const State = require('../Models/state');
// // Add state
// exports.addState = async (req, res) => {
//   const { name, country } = req.body;

//   try {
//     const newState = new State({ name, country });
//     await newState.save();
//     res.status(201).json({ message: 'State created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating state' });
//   }
// };

// // View all states for a specific country
// exports.getStates = async (req, res) => {
//   try {
//     const states = await State.find({ country: req.params.countryId }).populate('country');
//     res.json(states);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching states' });
//   }
// };