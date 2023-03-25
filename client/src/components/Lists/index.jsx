import { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { getLists, onDragCard, updateLists } from "../../store/lists/listsSlice";
import ListContent from "../ListContent";
import styles from './styles.module.css'



const Lists = () => {
    
    const { lists, isLoading } = useSelector((state) => state.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLists())

    }, [dispatch]);
    

    const onDragEnd = (result) => {
       
        dispatch(onDragCard(result))
        
    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

    <div className={styles.container}>
        {lists && Array.isArray(lists) ? lists.map((list) => (
        <ListContent key={list._id} _id={list._id} listTitle={list.listTitle} cards={list.cards}/>
        )):
        <div>{lists}</div>

        }


    </div>
    </DragDropContext>

  );
}
export default Lists;
