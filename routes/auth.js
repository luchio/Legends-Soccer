/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();

//vamos a importar los controladores de estas rutas

const {createUser,loginUser,renewToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');


router.post(
    '/new',
    [//middlewares
        check('name','El Nombre es obligatorio').notEmpty(),
        check('email','El Email es obligatorio').isEmail(),
        check('password','El Password debe tener 6 caracteres').isLength({min:6}),
        check('password','El Password debe tener un numero').matches(/\d/),
        validarCampos
    ],
    createUser);

router.post(
    '/',
    [
        check('email','El Email es obligatorio').isEmail(),
        check('password','El Password debe tener 6 caracteres').isLength({min:6}),
        check('password','El Password debe tener un numero').matches(/\d/),
        validarCampos
    ],
    loginUser);

router.get('/renew',validarJWT,renewToken);


module.exports = router;