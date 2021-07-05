import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Covid from "./Covid";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Covid />
      </Provider>
    </div>
  );
}

export default App;
