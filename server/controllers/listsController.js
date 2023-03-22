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

const updateListById = async (req, res) => {
    try {

        const listId = req.params.id; 
        const { listTitle, cards } = req.body; 
        
        const updatedList = await List.findByIdAndUpdate(listId, { 
            listTitle,
            cards
        }, { new: true });
        
        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500).json({ message: `Failed to update list, please try again. error: ${error} `});
    }
};

const updateLists = async (req, res) => {
    try {

        const listsUpdate = req.body; 
        const results = await Promise.all(listsUpdate.map(async (listUpdate) => {
            const { _id, listTitle, cards} = listUpdate; // получаем id записи и обновленные данные из объекта
      
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

module.exports = {
    getLists,
    createList,
    updateListById,
    updateLists
}