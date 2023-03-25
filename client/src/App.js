
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Wrapper from "./components/Wrapper";


function App() {

  return (
    <>
      <Wrapper>
        <AddList />
      </Wrapper>

      <Wrapper sx={{minHeight: '83vh'}}>
        <Lists/>
      </Wrapper>
    </>
  );
}

export default App;
