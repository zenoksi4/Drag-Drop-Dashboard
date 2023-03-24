import { Button, ListItem, ListItemText, TextField } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Card from '../Card';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.css'


const AddCard = () => {
    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState('');
  
    const handleClick = () => {
        setIsActive(!isActive);
    };
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleBlur = (event) => {

        const { relatedTarget } = event;
        if (!event.currentTarget.contains(relatedTarget)) {
          setIsActive(false);
        }
    
    };
  return (
    <div className={styles.cardContent} >
        <ListItem sx={{padding: 0}} className={styles.background} alignItems="flex-start">          
            <ListItemText sx={{textAlign: 'center'}}>

                {isActive ?
                    <div onBlur={(event) =>handleBlur(event)} >

                        <TextField
                            autoFocus
                            id="filled-multiline-static"
                            label="Add Card"
                            multiline
                            rows={4}
                            variant="filled"
                            onChange={handleChange}
                            sx={{width:'300px'}}
                        />

                        <div className={styles.buttons}>
                            <Button variant="contained" onClick={()=>{alert(text)}}>Add List</Button>
                            <CloseIcon sx={{fontSize: 35, cursor: 'pointer'}} className={styles.icon}/>
                        </div>
                    </div>
                :
                        <Button sx={{ fontSize: '0.8rem', color: 'black', justifyContent: 'center'}} onClick={handleClick}>
                            <AddSharpIcon/>Add Card
                        </Button>
                }
            </ListItemText>
        </ListItem>
    </div>

  );
}
export default AddCard;
