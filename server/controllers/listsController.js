const List = require('../models/listModel');

const getLists = async (req, res) => {
    try {
        const lists = await List.find();

        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ message: `Failed to get lists, please try again. error: ${error}`});
    }
};

const createList = async (req, res) => {

    try {

        const { listTitle, cards } = req.body;
        
        const list = await List.create({
            listTitle,
            cards
        });
        
        res.status(201).json(list);
    } catch (error) {
        res.status(500).json({ message: `Failed to create list, please try again. error: ${error} `});
    }
};

const addCardByListId = async (req, res) => {
    try {

        const listId = req.params.id; 
        const { card } = req.body; 
        
        const updatedList = await List.findByIdAndUpdate(
            { _id: listId }, 
            { $push: { cards: card } },
            { new: true } 
          );
        
        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500).json({ message: `Failed to add card by list id, please try again. error: ${error} `});
    }
};

const updateLists = async (req, res) => {
    try {

        const listsUpdate = req.body; 
        const results = await Promise.all(listsUpdate.map(async (listUpdate) => {
            const { _id, listTitle, cards} = listUpdate;
      
            const result = await List.findByIdAndUpdate(_id, { 
                listTitle,
                cards
            }, { new: true });
      
            return result;
          }));
    
        
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: `Failed to update list, please try again. error: ${error} `});
    }
};

const deleteCard = async (req, res) => {
    try {
        const {listId, cardId} = req.body; 

        const List = await List.findByIdAndUpdate(
            { _id: listId },
            { $pull: { cards: { _id: cardId } } }, 
            { new: true } 

        );


        if (!List) {  
            return res.status(404).send('List not found');
            }


        res.status(200).send(List);

    } catch(error) {
        res.status(500).send(`Failed to delete card: ${error}`);
    }
}

const deleteListById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteList = await List.findByIdAndDelete(id);


        if (!deleteList) {  
            return res.status(404).send('Item not found');
            }


        res.send(deleteList);

    } catch(error) {
        res.status(500).send(`Failed to delete item: ${error}`);
    }
}

module.exports = {
    getLists,
    createList,
    addCardByListId,
    updateLists,
    deleteCard,
    deleteListById
}