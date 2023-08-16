import './App.css';
import NewsList from './Components/NewsList';
import { browserHistory, Router, Route,Routes} 
from 'react-router';
import  { useEffect, useState } from 'react'
import Home from './Components/Home';
import About from './Components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import Business from './Components/Business';
import Sports from './Components/Sports';
import Tech from './Components/Tech';
import Health from './Components/Health';
import Science from './Components/Science';
import NewsList1 from './Newspaper/NewsList';
import NewsList2 from './Newspaper1/NewsList';
import Articles from './Components/Articles';
import Tesla from './Components/Tesla';
import Apple from './Components/Apple';
import US from './Components/US';
import Login from './Components/Login';
import Logout from './Components/Logout';
import UserDropdown from './Components/UserDropdown';

function App() {
  const [input,setInput] = useState("")
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);
  return (
    <div className="App">

    <Home />


    
    <Routes>
        <Route path="/" element={<Login setData={setData}/>} />

        <Route path="/home" element={<NewsList data={data} />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Tech />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/tesla" element={<Tesla />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/home/newspaper" element={<NewsList1 />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/usBusiness" element={<US />} />
        <Route path="/business/newspaper1" element={<NewsList2 />} />

        
      </Routes>

     
    </div>
  );
}

export default App;




