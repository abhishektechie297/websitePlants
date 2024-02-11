const express = require('express');
const router = express.Router();

const {allPlants, add,updatePlant,indoorPlants,outdoorPlants,floweringPlants,succulents} = require('../controllers/plantsController')

router.route('/all').get(allPlants);
router.route('/add').post(add)
router.route('/update/:id').put(updatePlant)
router.route('/indoorPlants').get(indoorPlants)
router.route('/outdoorPlants').get(outdoorPlants)
router.route('/floweringPlants').get(floweringPlants)
router.route('/succulents').get(succulents)


module.exports = router;
