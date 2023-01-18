import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Profile from './Component/Profile';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        
        <Link to="/"></Link>
        {/* <Link to="/About"></Link> */}
        <Link to="/Profile"></Link>

        <Routes>
          <Route exact path="/" element={<Home />} >
          </Route>
          
          <Route exact path="/Profile" element={<Profile />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
