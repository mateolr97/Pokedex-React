import './App.css';
import Selection from './components/Selection.js'
import Details from './components/Details.js'
import SelectionList from './components/SelectionList.js'
import SelectionTable from './components/SelectionTable.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container} from "react-bootstrap"
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
              <Container>
              <Row>
                <Col xs={12} md="auto">
                  <Selection />
                </Col>
                <Col xs={12} md="auto">
                  <Details />
                </Col>
              </Row>
              </Container>
              </>}/>
          <Route path="/pokemons/:pokemonId" element={<> 
          <Row>
            <Col xs={12} md={7} lg={7}>
              <Selection />
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Details />
            </Col>
          </Row>
          </>}/>
          
          <Route path="list/pokemons/:pokemonId" element={<> 
          <Row>
            <Col xs={12} md={7} lg={7}>
              <SelectionList />
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Details />
            </Col>
          </Row>
          </>}/>
          
          <Route path="table/pokemons/:pokemonId" element={<> 
          <Row>
            <Col xs={12} md={7} lg={7}>
              <SelectionTable />
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Details />
            </Col>
          </Row>
          </>}/>

        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
