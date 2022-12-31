
import "./App.css";
import { Header } from "./components/Header/Header";
import { Feedback } from "./components/Feedback/Feedback";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ServicesList } from "./components/ServicesList/ServicesList";

function App() {
  return (
    <div className="bg-slate-100">
      <div className="App">
        <Header />
      </div>
      <div><AboutUs/></div>
      <div><ServicesList/></div>
      <div className="App">
        <Feedback />
      </div>
    </div>
  );
}

export default App;
