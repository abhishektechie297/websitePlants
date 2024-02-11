

import './header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <ul className="nav">
       <div className='upwan'>
       <li className="nav-item">
          <Link to="/upwan" className="nav-link">Upwan</Link>
        </li>
       </div>

       <div className='sections'>

        
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="Plants" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plants
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/indoorPlants"> Indoor Plants </Link></li>
            <li><Link  class="dropdown-item" to="/outdoorPlants"> Outdoor Plants</Link></li>
            <li><Link  class="dropdown-item" to="/floweringPlants">Flowering Plants</Link></li>
            <li><Link class="dropdown-item" to="/succulents">Succulents</Link></li>
            <li><Link class="dropdown-item" to="/suggestPlants" > Suggest Plant</Link></li>
          </ul>
        </li>



        <li className="nav-item">
          <Link to="/seeds" className="nav-link">Seeds</Link>
        </li>
        <li className="nav-item suggest">
          <Link to="/suggestPlants" className="nav-link">Suggest me a plant</Link>
        </li>


        <form class="d-flex " role="search">
        <input class="form-control me-2" type="search" placeholder="Search Plants" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>


        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>

       </div>
      </ul>
    </header>
  );
}
export default Header;

