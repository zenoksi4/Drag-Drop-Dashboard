
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Wrapper from "./components/Wrapper";
import { Provider } from 'react-redux';
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <AddList />
        <Lists/>
      </Wrapper>
    </Provider>
  );
}

export default App;
