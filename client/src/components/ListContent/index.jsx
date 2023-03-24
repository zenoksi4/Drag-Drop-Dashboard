import List from '@mui/material/List';
import Card from '../Card';
import AddCard from '../AddCard';
import { Droppable } from 'react-beautiful-dnd';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import styles from './styles.module.css'
import { useState } from 'react';


const ListContent = ({_id, listTitle, cards}) => {

  const [isSort, setIsSort] = useState(false)

  return (
      <Droppable droppableId={_id}>
        {(provided) => (
          <div className={styles.content} ref={provided.innerRef} {...provided.droppableProps}>
            <h1 className={styles.title}>{listTitle}</h1>

            <div>
              <List className={styles.backGround} sx={{ width: "360px"}}>
                <div className={styles.icon} onClick={() => setIsSort(!isSort)}><UpdateRoundedIcon/>
                {isSort ?
                <KeyboardArrowDownRoundedIcon/>
                :
                <KeyboardArrowUpRoundedIcon/>
                }
                
                </div>
                {cards.map((card, index) => (
                  <Card key={card._id} _id={card._id} date={card.date} index={index}>{card.title} </Card>
                ))}
                {provided.placeholder}
                

                <AddCard/>
    
              </List>
            </div>
          </div>
        )}
      </Droppable>
    );
}
export default ListContent;
