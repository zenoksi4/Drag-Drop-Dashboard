import axios from 'axios'

const getLists = async () => {
    const lists = await axios.get('/api/lists');

    return lists.data;
}

const listsService = {
    getLists
}

export default listsService;