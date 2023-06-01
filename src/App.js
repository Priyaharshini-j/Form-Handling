import FormClassComponent from "./components/FormClassComponent/FormClassComponent";
import FormFunctionComponent from "./components/FormFunctionComponent/FormFunctionComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormClassComponent />
        <FormFunctionComponent />
      </header>
    </div>
  );
}

export default App;
