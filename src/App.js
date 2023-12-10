import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from './Components/Navbar/News/News';
import Carpentry from './Components/Carpentry/Carpentry';
import Settings from './Components/Navbar/Settings/Settings'
import {currModel,} from "./Redux/store";




function App(props) {
    debugger
  return (

    <div className="app-wrapper">
     <Header/>
        <Navbar />

        <div className='app-wrapper-content'>
    <Routes>
        <Route path='/News' element={<News/>}/>
        <Route path='/Carpentry' element={<Carpentry state={props.state} curStateAdd = {props.curStateAdd} currModel = {currModel}/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
        </div>
    </div>

  );
}

export default App;
