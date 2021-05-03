const express = require('express');
const router = express.Router();

// GigEvents Model
const GigEvent = require('../../models/GigEvent');
  

// @route   GET routes/gigEvents
// @desc    Get all GigEvents
// @access  Public
router.get('/getgigs', (req, res) => {
  GigEvent.find()
  .sort({ date: -1 })
  .then(gigEvents => res.json(gigEvents))
  });

// Get Gig
router.get('/getgig/:id', (req, res) => {
  GigEvent.findById(req.params.id)
  .then(gigEvent => res.json(gigEvent))
  .catch(err => res.status(404).json({ success: false }));
}); 

// Post Gig
// @route   POST routes/gigEvents
// @desc    Create a GigEvent
// @access  Public
router.post('/creategig', (req, res) => {
  console.log("REQUEST DATA");
  console.log(req.body);
  const newGigEvent = new GigEvent({
    name: req.body.name,
    description: req.body.description,
    time: req.body.time,
    address: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    state: req.body.state,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year
});
newGigEvent.save().then(gigEvent => res.json(gigEvent));
});



module.exports = router;