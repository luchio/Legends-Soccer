const {response} = require('express');
const Balls = require("../models/Balls");


const getBalls = async (req,res=response) =>{
    
    
    const balls = await Balls.find();

    
    res.json({
        ok:true,
        balls
    });
}

module.exports = {
    getBalls
}