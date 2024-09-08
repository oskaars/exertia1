const express = require('express');

const router = express.Router();

//all workouts
router.get('/', (req, res) => {
    res.json({msgg: 'GET all workouts'})
})

//get a single workout 

router.get('/:id', (res,req) => {
    res.json({msgg: 'GET a single workout'})
})

//POST a new workout 

router.post('/', (req, res) =>{
    res.json({msgg:'POST a new workout'})
})

//delete a workout

router.delete('/:id', (req, res) =>{
    res.json({msgg:'DELETE a workout'})
})

//update a workout

router.patch('/:id',(req, res) =>{
    res.json({msgg:'UPDATE (patch) a workout'})
})

module.exports = router