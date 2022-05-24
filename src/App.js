import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
