import './App.css';
import Selection from './components/Selection.js'
import Details from './components/Details.js'
import SelectionList from './components/SelectionList.js'
import SelectionTable from './components/SelectionTable.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
     <div className='app__body'>
      <Router>
        <Routes>
        <Route path="/table" element={<> 
            <SelectionTable/>
            <Details />
          </>}/>

          <Route path="/list" element={<> 
            <SelectionList />
            <Details />
          </>}/>

          <Route path="/" element={<> 
            <Selection />
            <Details />
          </>}/>
          
          <Route path="/pokemons/:pokemonId" element={<> 
            <Selection />
            <Details />
          </>}/>
          
          <Route path="list/pokemons/:pokemonId" element={<> 
            <SelectionList />
            <Details />
          </>}/>
          
          <Route path="table/pokemons/:pokemonId" element={<> 
            <SelectionTable/>
            <Details />
          </>}/>

        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
