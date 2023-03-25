import List from '@mui/material/List';
import Card from '../Card';
import AddCard from '../AddCard';
import { Droppable } from 'react-beautiful-dnd';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import styles from './styles.module.css'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../store/lists/listsSlice';
import SortableArrows from '../SortableArrows';



const ListContent = ({_id, listTitle, cards}) => {
  const dispatch = useDispatch(); 
  
  const [isSort, setIsSort] = useState(false)

  const onDeleteList = () => {
    dispatch(deleteList(_id))
  }

  return (
      <Droppable droppableId={_id} >
        {(provided) => (
          <div className={styles.content} ref={provided.innerRef} {...provided.droppableProps}>
            <h1 className={styles.title}>{listTitle}</h1>

            <div>
              <List className={styles.backGround} sx={{ width: "360px"}}>
                <div className={styles.icons} >
                  { cards.length === 0 ?
                    <DeleteIcon className={styles.icon} onClick={onDeleteList}/>
                  :
                    <div className={styles.icon} onClick={() => setIsSort(true)}>
                      <UpdateRoundedIcon/>
                      {isSort &&
                        <SortableArrows _id={_id}/>
                      }
                    </div>
                  }
                </div>
                {cards.map((card, index) => (
                  <Card key={card._id} 
                    _id={card._id} 
                    date={card.date} 
                    index={index}
                    listId={_id}
                    setIsSort={setIsSort}
                  >{card.title} </Card>
                ))}
                {provided.placeholder}
                

                <AddCard listId={_id}/>
    
              </List>
            </div>
          </div>
        )}
      </Droppable>
    );
}
export default ListContent;
