import axios from 'axios'

const proxy = 'http://localhost:8000'

const getLists = async () => {
    const lists = await axios.get(`${proxy}/api/lists`);

    return lists.data;
}

const putLists = async (updateLists) => {
    
    const lists = await axios.put(`${proxy}/api/lists`, updateLists);

    return lists.data;
}
const createList = async (Title) => {
    
    const createdList = await axios.post(`${proxy}/api/lists`, {listTitle: Title});

    return createdList.data;
}

const deleteList = async (_id) => {
    const deletedList = await axios.delete(`${proxy}/api/lists/${_id}`);

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
    
    const createdList = await axios.put(`${proxy}/api/lists/${listId}`, {title: titleCard});

    return createdList.data;
}

const deleteCardList = async (listId, cardId) => {

    const deletedCardList = await axios.delete(`${proxy}/api/lists/card`, { data: { listId: listId, cardId: cardId }});

    return deletedCardList.data;
}


const sortCards = (state, action) => {
    const {_id, sortByDate} = action.payload
    let sortList = state.lists.filter((list) => (list._id === _id))

    sortByDate?
        sortList[0].cards.sort((a, b) => new Date(b.date) - new Date(a.date))
    :
        sortList[0].cards.sort((a, b) => new Date(a.date) - new Date(b.date))
    
    putLists(sortList);

}

const listsService = {
    getLists,
    putLists,
    createList,
    deleteList,
    updateLists,
    createCardList,
    deleteCardList,
    sortCards
}

export default listsService;