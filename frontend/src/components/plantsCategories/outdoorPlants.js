
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function OutdoorPlants() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


const ApiUrl = 'http://localhost:8000/api/plants/outdoorPlants'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(ApiUrl);

        if (response.status === 200) {
          setData(response.data);
        } else {
          setError('API request failed');
        }
      } catch (error) {
        console.log(error)
        setError('An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-green-900">Outdoor Plants</h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.map((plant) => (
                  <div className="group relative" key={plant.id}>
                   
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    {plant.image && (
      <img
        src={plant.image}
        alt={plant.image}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    )}
                   </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h1 className="text-lg text-green-900">{plant.name}</h1>
                        <p className="text-sm font-medium text-gray-500"> Scientific Name:</p>
                        <p className="text-sm font-medium text-black-500"> {plant.scientificName}</p>
                        <h3>Rs {plant.price}</h3>
                       
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}



