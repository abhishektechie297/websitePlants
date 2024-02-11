const express = require('express');
const router = express.Router();
const {suggestPlant,suggest1,suggest2,suggest3,suggest4,suggest5,suggest6,suggest7,suggest8,suggest9,suggest10,suggest11,suggest12} = require('../controllers/suggestPlant')

router.route('/suggestPLant').post(suggestPlant)
router.route('/plant1').get(suggest1)
router.route('/plant2').get(suggest2)
router.route('/plant3').get(suggest3)
router.route('/plant4').get(suggest4)
router.route('/plant5').get(suggest5)
router.route('/plant6').get(suggest6)
router.route('/plant7').get(suggest7)
router.route('/plant8').get(suggest8)
router.route('/plant9').get(suggest9)
router.route('/plant10').get(suggest10)
router.route('/plant11').get(suggest11)
router.route('/plant12').get(suggest12)

module.exports = router;