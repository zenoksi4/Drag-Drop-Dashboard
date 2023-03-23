import List from '@mui/material/List';
import styles from './styles.module.css'


import Card from '../Card';
import AddCard from '../AddCard';

const ListContent = () => {
    return (
      <div className={styles.content}>

        <h1 className={styles.title}>Title</h1>

        <div>
          <List className={styles.backGround} sx={{ width: "360px"}}>
            <Card date={'25 min ago'}>123sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Card>
            <Card date={'1h ago'}>123sssssssss</Card>
            <AddCard/>


          </List>
        </div>
      </div>
      );
}
export default ListContent;
