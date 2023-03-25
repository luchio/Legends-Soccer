/*
    Rutas de Players / players
    host + /api/players
*/

const {Router} = require('express');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT');
const { getPlayers } = require('../controllers/player');

router.use(validarJWT);


router.get('/',getPlayers);



module.exports = router;