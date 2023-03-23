
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Wrapper from "./components/Wrapper";


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
