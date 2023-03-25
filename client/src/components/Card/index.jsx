import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import styles from './styles.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { deleteCardList } from '../../store/lists/listsSlice';

const Card = ({children, sx, textAlign, date, index, _id, listId, setIsSort}) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    const onDeleteCard = () => {
        const cardId = _id
        dispatch(deleteCardList({listId, cardId}))
    }
    const handleMouseEnter = () => {
        setIsSort(false)
        setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const formatDate = (date) => {
        const diff = Math.floor((new Date() - new Date(date)) / 1000);
      
        if (diff < 60 && diff > 0) {
          return `${diff} seconds ago`;
        } else if (diff <= 0) {
            return `1 seconds ago`;
        } else if (diff < 60 * 60) {
          const minutes = Math.floor(diff / 60);
          return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (diff < 60 * 60 * 24) {
          const hours = Math.floor(diff / (60 * 60));
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (diff < 60 * 60 * 24 * 30) {
          const days = Math.floor(diff / (60 * 60 * 24));
          return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else {
          const months = Math.floor(diff / (60 * 60 * 24 * 30));
          return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        }
      };
  
    return (
        <Draggable draggableId={_id} index={index} >

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
                                    <div>{formatDate(new Date(date))}</div>
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
