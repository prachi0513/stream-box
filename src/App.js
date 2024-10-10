import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="bg-black">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
