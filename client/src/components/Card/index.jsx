import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import styles from './styles.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { deleteCardList } from '../../store/lists/listsSlice';

const Card = ({children, sx, textAlign, date, index, _id, listId}) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    const onDeleteCard = () => {
        const cardId = _id
        dispatch(deleteCardList({listId, cardId}))
    }
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <Draggable draggableId={_id} index={index}>

            {(provided) => (
                <div 
                className={styles.cardContent} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <ListItem sx={{...sx}} className={styles.background} alignItems="flex-start">
                    
                    {date ?
                        <div className={styles.listCard}>
                            <ListItemText sx={{textAlign: textAlign}}>{children}</ListItemText>

                            { isHovered &&
                                <div className={styles.cardBar}>
                                    <div>{date}</div>
                                    <DeleteIcon onClick={onDeleteCard} className={styles.icon}/>
                                </div>
                            }
                        </div>

                    :
                    <ListItemText sx={{textAlign: textAlign}}>{children}</ListItemText>
                        
                    }

                </ListItem>
            </div>
            )}

        </Draggable>
    );
}
export default Card;
