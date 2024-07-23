import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "../data";
import "./App.css";


function App() {
  const cards = data.map((item) => {
   return (
    <Card key={item.id} item={item} />
   )
   })

  return (
    <>
    <Navbar />
    <div className="mx-auto max-w-screen-xl justify-center items-start">
    {cards}
    </div>
    </>
  );
}

export default App;
