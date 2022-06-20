import './App.css';
import Selection from './components/Selection.js'
import Details from './components/Details.js'
import Views from './components/Views.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
     <div className='app__body'>
      <Router>
        <Routes>

          <Route path="/" element={<> 
            <Selection />
            <Details />
          </>}/>
          
          <Route path="/pokemons/:pokemonId" element={<> 
            <Selection />
            <Details />
          </>}/>

        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
