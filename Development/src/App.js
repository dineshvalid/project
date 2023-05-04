import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from './Main';
import Home from './Home';
import About from './About';
import What_Wedo from './What_wedo';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Main/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/What_Wedo" element={<What_Wedo/>}/>
        <Route exact path="/Project" element={<Project/>}/>
        <Route exact path="/Blog" element={<Blog/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
