import './App.css';
import Selection from './components/Selection.js'
import Details from './components/Details.js'

function App() {
  return (
    <div className="app">
     <div className='app__body'>
      <Selection />
      <Details />

     </div>
    </div>
  );
}

export default App;
