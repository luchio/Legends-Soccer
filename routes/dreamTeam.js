/*
    Rutas de DreamTeam / dreamTeam
    host + /api/dreamTeam
*/

const {Router} = require('express');
const router = Router();
const {getDreamTeams,createDreamTeams,deleteDreamTeams,updateDreamTeams} = require('../controllers/dreamTeam');
const {validarJWT} = require('../middlewares/validarJWT');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');

router.use(validarJWT);

router.get('/',getDreamTeams);
router.post('/',[
    check('name','El nombre del equipo es obligatorio').notEmpty(),
    check('grl_team','El GRL del equipo es obligatorio').notEmpty(),
    check('lineup.name','El nombre de la alineacion es obligatorio').notEmpty(),
    check('lineup.img_lineup','La imagen de la alineacion es obligatorio').notEmpty(),
    check('lineup.items','Los items son obligatorios').isLength({min:1}),
    check('lineup.items.*.position','Las posiciones son obligatorias').notEmpty(),
    check('lineup.items.*.top','El top es obligatorio').notEmpty(),
    check('lineup.items.*.left','El left es obligatorio').isLength({min:1}),
    check('lineup.items.*.player','El player es obligatorio').isLength({min:1}),
    validarCampos,

],createDreamTeams);
router.put('/:id',[
    check('name','El nombre del equipo es obligatorio').notEmpty(),
    check('grl_team','El GRL del equipo es obligatorio').notEmpty(),
    check('lineup.name','El nombre de la alineacion es obligatorio').notEmpty(),
    check('lineup.img_lineup','La imagen de la alineacion es obligatorio').notEmpty(),
    check('lineup.items','Los items son obligatorios').isLength({min:1}),
    check('lineup.items.*.position','Las posiciones son obligatorias').notEmpty(),
    check('lineup.items.*.top','El top es obligatorio').notEmpty(),
    check('lineup.items.*.left','El left es obligatorio').isLength({min:1}),
    check('lineup.items.*.player','El player es obligatorio').isLength({min:1}),
    validarCampos,

],updateDreamTeams);
router.delete('/:id',deleteDreamTeams);



module.exports = router;
