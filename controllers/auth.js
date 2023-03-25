const {response} = require('express'); //para obtener el tipaje dentro de la funcion
const {validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');



const createUser = async (req,res=response)=>{

    const {email,password} = req.body;

    try {
          //encuentra un documento
        let user= await User.findOne({email: email});
        if(user) {
            return res.status(400).json({
                ok:false,
                msg: 'Un usuario existe con ese correo'
            });
        }

         user = new User(req.body);

         //encriptar contrasena

         const salt = bcrypt.genSaltSync();
         user.password = bcrypt.hashSync(password, salt);

        //esto devuelve una promesa
        await user.save();

        //generar el JWT
        const token =  await generarJWT(user._id,user.name);
    
        res.status(201).json({
            ok:true,
            uid:user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        })
    }

   
}

const loginUser = async(req,res=response)=>{

    const {email,password} = req.body;

    try {

        const user= await User.findOne({email: email});
        //console.log(user);
        if(!user) {
            return res.status(400).json({
                ok:false,
                msg: 'Usuario o contraseña incorrectos'
            });
        }

        const validPassword = bcrypt.compareSync(password,user.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'Contraseña incorrecta'
            });
        }

         //generar el JWT
         const token = await generarJWT(user.id,user.name);

        res.status(200).json({
            ok:true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const renewToken = async(req,res=response)=>{

    const {uid,name} = req;

    const token = await generarJWT(uid,name);
   
    res.json({
        ok:true,
        uid,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}