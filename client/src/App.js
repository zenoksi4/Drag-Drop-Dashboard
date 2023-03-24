
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from "./store/lists/listsSlice";
import { useEffect } from "react";

function App() {

  return (
      <Wrapper>
        <AddList />
        <Lists/>
      </Wrapper>
  );
}

export default App;
