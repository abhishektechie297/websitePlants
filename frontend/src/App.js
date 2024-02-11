

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Home from './components/home';

import Header from './components/header';
import Login from './components/login';

import FloweringPlants from './components/plantsCategories/flowering';
import IndoorPlants from './components/plantsCategories/indoorPlants';
import OutdoorPlants from './components/plantsCategories/outdoorPlants';
import Succulents from './components/plantsCategories/succulents';
import SuggestPlant from './components/suggestPlants';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/upwan" element={<Home />} />
          <Route path="/" element={<Home />} />
          
          
          <Route path="/indoorPlants" element={<IndoorPlants />} />
          <Route path="/outdoorPlants" element={< OutdoorPlants />} />
          <Route path="/floweringPlants" element={< FloweringPlants />} />
          <Route path="/succulents" element={< Succulents />} />
          <Route path="/suggestPlants" element={< SuggestPlant />} />

          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
      
    </Router>
  );
}

// import Suggestplant from "./components/plants";
// import Header from "./components/header";
// import Plants from "./components/plants";
// import Crousal from "./components/plantsuggest";
// import Home from "./components/home";

// function App() {
//   return (
//     <>
//     <Header />
//     <Home />
   
//    {/* <Plants/> */}
    
   
//   </>
//   );
// }

// export default App;
