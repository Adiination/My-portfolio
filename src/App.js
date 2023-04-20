import Dp from './components/pictures/Dp.jpg';
import './App.css';
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      <Route path='/Project' element = {<Project/>}/>
      <Route path='/About' element = {<About/>}/>




    </Routes>
    
    
    
    </>
  );
}

export default App;
