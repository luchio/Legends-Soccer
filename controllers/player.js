const {response} = require('express');
const Player = require("../models/Player");

const getPlayers = async (req,res=response) =>{
    
    
    const players = await Player.find();

    
    res.json({
        ok:true,
        players
    });
}

module.exports = {
    getPlayers
}