const {response} = require('express');
const DreamTeam = require("../models/DreamTeam");
const Player = require('../models/Player');



const getDreamTeams = async (req,res=response) =>{


    const dreamTeam = await DreamTeam.find({user:req.uid},null,{new:true}).populate({path:"lineup.items.player"}).populate('user','name');

    res.json({
        ok:true,
        dreamTeam
    })
}

const createDreamTeams = async (req,res=response) =>{

    const dreamTeam = new DreamTeam(req.body);

    try {

        dreamTeam.user = req.uid;

        await dreamTeam.save();

        res.json({
            ok:true,
            dreamTeam

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}
const updateDreamTeams = async (req,res=response) =>{
    //id viene por defecto como parametro
    const dreamTeamId = req.params.id;
    const uid = req.uid;

    try {

        const dreamTeam = await DreamTeam.findById(dreamTeamId);

        if(!dreamTeam){
           return res.status(404).json({
                ok:false,
                msg: 'El equipo no existe con ese id'
            })
        }

        if(dreamTeam.user.toString() != uid){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            })
        }

        const nuevoDreamTeam = {
            ...req.body,
            user: uid
        }

        const dreamTeamActualizado = await DreamTeam.findByIdAndUpdate(dreamTeamId,nuevoDreamTeam,{new:true})

       

        res.json({
            ok:true,
            msg: 'Update',
            dreamTeamActualizado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

    

}

const deleteDreamTeams = async (req,res=response) =>{

    const dreamTeamId = req.params.id;
    const uid = req.uid;

    try {

        const dreamTeam = await DreamTeam.findById(dreamTeamId);

        if(!dreamTeam){
            return res.status(404).json({
                 ok:false,
                 msg: 'El equipo no existe con ese id'
             })
         }
 
         if(dreamTeam.user.toString() != uid){
             return res.status(401).json({
                 ok:false,
                 msg:'No tiene privilegio de eliminar este evento'
             })
         }

         await DreamTeam.findByIdAndDelete(dreamTeamId,{new:true});

         res.json({
            ok:true,
            msg: 'Eliminado correctamente'
         })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
    }
}

module.exports = {
    getDreamTeams,
    createDreamTeams,
    updateDreamTeams,
    deleteDreamTeams
}