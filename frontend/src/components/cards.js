
import './cards.css'


import React from 'react';

function Categories() {
  
  return (
    <div className='event-cards'>
        <div className="card" style={{ width: '18rem' }}>
      <img src="https://nurserylive.com/cdn/shop/products/nurserylive-easy-to-grow-plants-on-metal-stand-for-indirect-light-location.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="/indoorPlants" className="btn btn-primary" > Indoor Plants </a>
        
      </div>
    </div>

    <div className="card" style={{ width: '18rem' }}>
       <img src=" https://housing.com/news/wp-content/uploads/2023/03/outdoor-plants-for-home-shutterstock_479603197-1200x700-compressed.jpg " className="card-img-top" alt="..." /> 
     
      
      <div className="card-body">
         <a href="/outdoorPlants" className="btn btn-primary"> Outdoor Plants  </a>
      </div>
    </div>

    <div className="card" style={{ width: '18rem' }}>
      <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/23/1/Original_Alison-Gootee_098.jpg.rend.hgtvcom.616.462.suffix/1503535018325.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="succulents" className="btn btn-primary"> Succulents   </a>
      </div>
    </div>

    <div className="card" style={{ width: '18rem' }}>
      <img src="https://www.marthastewart.com/thmb/uM0Nsv-eBYnB6a0ml0VhVGLeE1A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flowering-indoor-plants-lovely-blooms-cyclamen-getty-0523-ea4a13dd4c124e6d85e1795929443d26.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="floweringPlants" className="btn btn-primary"> Flowering Plants  </a>
      </div>
    </div>

   
  

    </div>

   


    
  );
}

    export default Categories;