import "./App.css";
import AddItem from "./components/AddItem";
import DisplayItem from "./components/DisplayItem";
import CartContextProvider from "./components/store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <AddItem />
        <DisplayItem />
      </div>
    </CartContextProvider>
  );
}

export default App;