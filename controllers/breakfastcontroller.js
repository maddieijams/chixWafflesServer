const router = require('express').Router();
const Breakfast = require('../db').import('../models/breakfast');

// Create breakfast
router.post('/create', (req, res) => {
  Breakfast.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    image: req.body.image,
    desc: req.body.desc
  })
    .then(
      createSuccess = (breakfastItem) => {
        res.json({
          breakfast: breakfastItem,
          message: 'breakfast item created'
        })
      },
      createError = err => res.status(500).send(err)
    )
})

// Get all breakfast items
router.get('/all', (req, res) => {
  Breakfast.findAll()
    .then(breakfastItems => res.status(200).json(breakfastItems))
    .catch(err => res.status(500).json({ error: err }))
});

// Get single breakfast item by id for updating
router.get('/one/:id', (req, res) => {
  Breakfast.findOne({where: {id: req.params.id}})
  .then(breakfastItem => res.status(200).json(breakfastItem))
  .catch(err => res.status(500).json(err))
});

// Update breakfast item by id
router.put('/edit/:id', (req, res) => {
  if (!req.errors) {
    Breakfast.update(req.body, { where: { id: req.params.id }})  
      .then(breakfastItem => res.status(200).json(breakfastItem))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete breakfast item by id
router.delete('/delete/:id', (req, res) => {
  if (!req.errors) {
    Breakfast.destroy({ where: { id: req.params.id }})
      .then(landmark => res.status(200).json(landmark))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;