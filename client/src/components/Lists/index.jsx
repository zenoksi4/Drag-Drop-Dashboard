import { DragDropContext } from "react-beautiful-dnd";
import ListContent from "../ListContent";
import styles from './styles.module.css'



const Lists = () => {
  let lists = [
    {
        id: "641aee315b5b81c038020e35",
        listTitle: "asd123ss222",
        cards: [
            {
                title: "123dssss",
                date: "2023-03-22T12:55:39.753Z",
                id: "641afacb414317cac5bd3416"
            },
            {
                title: "newcard",
                id: "641b0877d73cbeefabcefdfb",
                date: "2023-03-22T13:53:59.387Z"
            },
            {
                title: "newcard2",
                id: "641b090203f166f014020035",
                date: "2023-03-22T13:56:18.730Z"
            }
        ],
    },
    {
        id: "641aeefe8bc2f3e22e2a6122",
        listTitle: "asd123ee",
        cards: [
            {
                title: "123ds",
                date: "2023-03-22T12:55:39.750Z",
                id: "641afacb414317cac5bd3414"
            },
            {
                title: "123dsnew",
                id: "641afbd0414317cac5bd3427",
                date: "2023-03-22T13:00:00.061Z"
            }
        ],
    }
  ];

  const onDragEnd = (result) => {
    const {source, destination} = result;
    console.log(result);

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index
      ) 
        return;
    let sourceList = lists.filter((list) => (list.id === source.droppableId))
    let destinationList = lists.filter((list) => (list.id === destination.droppableId))
    let card = sourceList[0].cards[source.index]
    sourceList[0].cards.splice(source.index, 1)
    destinationList[0].cards.splice(destination.index, 0, card)
    console.log(sourceList)

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

    <div className={styles.container}>
        {lists.map((list) => (
        <ListContent key={list.id} id={list.id} listTitle={list.listTitle} cards={list.cards}/>
        ))}


    </div>
    </DragDropContext>

  );
}
export default Lists;
