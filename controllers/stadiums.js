const {response} = require('express');
const Stadium = require('../models/Stadium');


const getStadium = async (req,res=response) =>{
    
    
    const stadiums = await Stadium.find();

    
    res.json({
        ok:true,
        stadiums
    });
}

module.exports = {
    getStadium
}