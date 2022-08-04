import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages';

function App() {

  const[arts, setArts] = React.useState([]);

  React.useEffect(()=>{
    fetch('http://localhost:3000/db.json')
    .then((resp)=>resp.json())
    .then(json=>{
      setArts(json.arts);
    });
  },[]);

  return (
    <div>
      <Routes>
         <Route  path="/" element ={<MainPage items={arts}/>} />  
      </Routes>

    </div>
  )
}

export default App