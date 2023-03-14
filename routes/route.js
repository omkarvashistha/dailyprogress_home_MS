const express = require('express')
const router = express.Router()
const controller = require('../Controller/homeController')

const cors = require('cors');

router.use(cors())

router.get('/:username/getUserGoalsData',controller.getUserGoalsData);
router.get('/:username/getUserJournalData',controller.getUserJournalData);


module.exports = router