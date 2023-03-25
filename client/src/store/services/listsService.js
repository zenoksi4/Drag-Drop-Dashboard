import axios from 'axios'

const getLists = async () => {
    const lists = await axios.get('http://localhost:8000/api/lists');

    return lists.data;
}

const putLists = async (updateLists) => {
    
    const lists = await axios.put('http://localhost:8000/api/lists', updateLists);

    return lists.data;
}
const createList = async (Title) => {
    
    const createdList = await axios.post('http://localhost:8000/api/lists', {listTitle: Title});

    return createdList.data;
}

const deleteList = async (_id) => {
    const deletedList = await axios.delete(`http://localhost:8000/api/lists/${_id}`);

    return deletedList.data;
}

const updateLists = (state, action) => {
    const {source, destination} = action.payload;
            
    if (!destination) return;

    if (
    destination.droppableId === source.droppableId && 
    destination.index === source.index
    ) 
        return;

    let sourceList = state.lists.filter((list) => (list._id === source.droppableId))
    let destinationList = state.lists.filter((list) => (list._id === destination.droppableId))
    let card = sourceList[0].cards[source.index]
    card.date = new Date().toISOString()

    sourceList[0].cards.splice(source.index, 1)
    destinationList[0].cards.splice(destination.index, 0, card)
    putLists([sourceList[0], destinationList[0]]);
}


const createCardList = async (listId, titleCard) => {
    
    const createdList = await axios.put(`http://localhost:8000/api/lists/${listId}`, {title: titleCard});

    return createdList.data;
}


const listsService = {
    getLists,
    putLists,
    createList,
    deleteList,
    updateLists,
    createCardList
}

export default listsService;