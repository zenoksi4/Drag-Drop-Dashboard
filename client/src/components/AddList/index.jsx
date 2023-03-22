import {useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.css'

const AddList = () => {
    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState('');
  
    const handleClick = () => {
        setIsActive(!isActive);
    };
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleBlur = (event) => {
        console.log(event)
        const { relatedTarget } = event;
        if (!event.currentTarget.contains(relatedTarget)) {
          setIsActive(false);
        }
    
    };
  
    return (
      <div className={styles.container}>
        {
        isActive ?
            <div className='wrap' onBlur={(event) =>handleBlur(event)} >
                <TextField size='small' autoFocus  onChange={handleChange}  />

                <div className={styles.buttons}>
                    <Button variant="contained" onClick={()=>{alert(text)}}>Add List</Button>
                    <CloseIcon sx={{fontSize: 35, cursor: 'pointer'}} className={styles.icon}/>
                </div>
            </div>
            :
            <Button sx={{ fontSize: '1rem' }} onClick={handleClick}><AddSharpIcon/>Add List</Button>

        }
      </div>
    );
}

export default AddList;