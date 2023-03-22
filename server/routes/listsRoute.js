const express = require('express');
const router = express.Router();
const { 
    getLists, 
    createList, 
    updateLists,  
    updateListById, 
    deleteCard, 
    deleteListById
} = require('../controllers/listsController')


router.get('/', getLists);

router.post('/', createList);

router.put('/:id', updateListById);

router.put('/', updateLists);

router.delete('/card', deleteCard);

router.delete('/:id', deleteListById)




module.exports = router;