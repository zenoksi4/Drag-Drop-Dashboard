
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Wrapper from "./components/Wrapper";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <AddList />
        <Lists/>
      </Wrapper>
    </div>
  );
}

export default App;
