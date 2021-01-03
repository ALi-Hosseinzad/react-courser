import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainLayout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
