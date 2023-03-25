const {response} = require('express');
const Lineup = require("../models/Lineup");
const Player = require('../models/Player');


const getLineups = async (req,res=response) =>{


    const lineups = await Lineup.find().populate({path:"items.player"});

    res.json({
        ok:true,
        lineups
    })
}

module.exports ={
    getLineups
}