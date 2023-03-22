const express = require('express');
const router = express.Router();
const { getLists, createList, updateLists,  updateListById} = require('../controllers/listsController')


router.get('/', getLists);

router.post('/', createList);

router.put('/:id', updateListById)

router.put('/', updateLists)




module.exports = router;