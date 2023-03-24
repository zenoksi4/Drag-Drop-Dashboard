import axios from 'axios'

const getLists = async () => {
    const lists = await axios.get('http://localhost:8000/api/lists');

    return lists.data;
}

const putLists = async (updateLists) => {
    
    const lists = await axios.put('http://localhost:8000/api/lists', updateLists);

    return lists.data;
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
    sourceList[0].cards.splice(source.index, 1)
    destinationList[0].cards.splice(destination.index, 0, card)
    putLists([sourceList[0], destinationList[0]]);
}

const listsService = {
    getLists,
    putLists,
    updateLists
}

export default listsService;