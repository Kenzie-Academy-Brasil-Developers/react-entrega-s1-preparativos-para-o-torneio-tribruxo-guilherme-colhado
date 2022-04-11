import './App.css';
import { useState, useEffect } from 'react' 
import Home from './components/Home';
import Tribruxo from './components/Tribruxo';


function App() {
  const [students, setStudents] = useState([])
  const [home, setHome] = useState(true)
  const [tres, setTres] = useState([])
  useEffect(()=>{fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(response=>response.json())
    .then(response=>setStudents(response))
    .catch(error => console.log(error))}
    ,[])
  return (
    <div className="App">
      <header className="App-header">
        {
          home 
          ? 
          <Home setHome={setHome} tres={tres} setTres={setTres} students={students}/> 
          : 
          <Tribruxo students={students} tres={tres} setTres={setTres}/>
        }
      </header>
    </div>
  );
}

export default App;
