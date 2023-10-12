const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

//get request
router.get('/',async(req,res) => {
    try{
        const aliens = await Alien.find();
        //sending or returning data in json format
        res.json(aliens)
    }
    catch(e){
        res.send('error occured')
    }
})

//get request by id
router.get('/:id',async(req,res) => {
    try{
        //params is used because we are getting id from url
        const alien = await Alien.findById(req.params.id);
        //sending or returning data in json format
        res.json(alien)
    }
    catch(e){
        res.send('error occured',e)
    }
})



//post request
router.post('/', async(req,res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(e){
        res.send('Error ')
    }
})


//patch request
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)

    }
    catch(e){
        res.send("Error")
    }
})

//delete request
router.delete('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id)
        res.json(alien)
    }
    catch(e){
        res.send("Error",e)
    }
})


module.exports = router