import {useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { createList } from '../../store/lists/listsSlice';

const AddList = () => {
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch()
  
    const handleAddList = () => {
      if (title !== ''){
        dispatch(createList(title));
      }
    }
    const handleClick = () => {
        setIsActive(!isActive);
    };
  
    const handleChange = (event) => {
      setTitle(event.target.value.trim());
    };
  
    const handleBlur = (event) => {

        const { relatedTarget } = event;
        if (!event.currentTarget.contains(relatedTarget)) {
          setIsActive(false);
        }
    
    };
  
    return (
      <div className={styles.container}>
        {
        isActive ?
            <div onBlur={(event) =>handleBlur(event)} >
                <TextField size='small' autoFocus  onChange={handleChange}  />

                <div className={styles.buttons}>
                    <Button variant="contained" onClick={handleAddList}>Add List</Button>
                    <CloseIcon sx={{fontSize: 35, cursor: 'pointer'}} className={styles.icon}/>
                </div>
            </div>
            :
            <Button sx={{ fontSize: '1rem', marginBottom: '46.5px' }} onClick={handleClick}><AddSharpIcon/>Add List</Button>

        }
      </div>
    );
}

export default AddList;