const express = require('express');
const router = express.Router();
const { getLists, createList } = require('../controllers/listsController')


router.get('/', getLists);

router.post('/', createList);



module.exports = router;