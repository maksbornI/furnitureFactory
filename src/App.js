import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from './Components/Navbar/News/News';
import Carpentry from './Components/Navbar/Carpentry/Carpentry';
import Settings from './Components/Navbar/Settings/Settings'


function App(props) {
  return (

    <div className="app-wrapper">
     <Header/>
        <Navbar />
        <div className='app-wrapper-content'>
    <Routes>
        <Route path='/News' element={<News/>}/>
        <Route path='/Carpentry' element={<Carpentry state={props.state} addArray = {props.addArray}/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
        </div>
    </div>

  );
}

export default App;
