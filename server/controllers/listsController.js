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

module.exports = {
    getLists,
    createList
}