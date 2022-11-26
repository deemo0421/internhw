import React from "react";
import DetailPages from "./pages/RepositoryDatailPage/DetailPage"
import Homepage from "./pages/Home/Homepage";
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/users/:username/*" element={<Homepage />}/>
        <Route path="/reops/:owner/*" element={<DetailPages />}/>
      </Routes>     
    </BrowserRouter>
    
  );
}

export default App;
