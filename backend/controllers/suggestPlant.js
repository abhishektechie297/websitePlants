const express = require('express');
const Plant = require('../models/plants ');



exports.suggestPlant = async (req,res)=>{
    const {watering,sunlight,floweringPlant} = req.body
    try {
        const randomPlant = await Plant.aggregate([
            { 
                $match: { 
                  watering: watering,
                  sunlight: sunlight,
                  floweringPlant : floweringPlant
    
                } },
            { $sample: { size: 1 } } 
          ]);
      
          if (randomPlant.length > 0) {
            res.json(randomPlant[0]);
          } else {
            res.json({ message: 'No plants found' });
          } 
        
    } catch (error) {
        console.log(error)
    }
}

  exports.suggest1 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Regular",
              sunlight:"Part shade",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  

  exports.suggest2 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Regular",
              sunlight:"Part shade",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  
  exports.suggest3 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Regular",
              sunlight:"Full sun",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };


  
  exports.suggest4 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Regular",
              sunlight:"Full sun",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };
//


exports.suggest5 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Moderate",
              sunlight:"Part shade",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  

  exports.suggest6 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Moderate",
              sunlight:"Part shade",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  
  exports.suggest7 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Moderate",
              sunlight:"Full sun",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };


  
  exports.suggest8 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Moderate",
              sunlight:"Full sun",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  //

  
  exports.suggest9 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Low",
              sunlight:"Part shade",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  

  exports.suggest10 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Low",
              sunlight:"Part shade",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };

  
  exports.suggest11 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Low",
              sunlight:"Full sun",
              floweringPlant : true

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };


  
  exports.suggest12 = async (req, res) => {
    try {
      const randomPlant = await Plant.aggregate([
        { 
            $match: { 
              watering: "Low",
              sunlight:"Full sun",
              floweringPlant : false

            } },
        { $sample: { size: 1 } } 
      ]);
  
      if (randomPlant.length > 0) {
        res.json(randomPlant[0]);
      } else {
        res.json({ message: 'No plants found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error fetching your  plant' });
    }
  };



  




//   /////////////
  
// exports.suggestIndoorPlant = async (req, res) => {
//     try {
//       const [randomIndoorPlant] = await Plant.find({
//         indoor: true,
//       }).limit(1); // Use limit(1) to fetch a single random plant
  
//       res.json(randomIndoorPlant);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   exports.suggestFloweringIndoorPlant = async (req, res) => {
//       try {
//         const randomFloweringPlant = await Plant.aggregate([
//           {
//               $match: { 
//                   floweringPlant: true,
//                   indoor: true
//                 } 
//            }, 
//           { $sample: { size: 1 } } // Randomly select one document
//         ]);
    
//         if (randomFloweringPlant.length > 0) {
//           res.json(randomFloweringPlant[0]);
//         } else {
//           res.json({ message: 'No flowering plants found' });
//         }
//       } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Error fetching a random flowering plant' });
//       }
//     };
  
  
//     exports.suggestFloweringOutdoorPlant = async (req, res) => {
//       try {
//         const randomFloweringPlant = await Plant.aggregate([
//           { 
//               $match: { 
//                   floweringPlant: true,
//                   outdoor: true
//                 } 
//            }, 
//           { $sample: { size: 1 } } 
//         ]);
    
//         if (randomFloweringPlant.length > 0) {
//           res.json(randomFloweringPlant[0]);
//         } else {
//           res.json({ message: 'No flowering plants found' });
//         }
//       } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Error fetching a random flowering plant' });
//       }
//     };
  
  
//     exports.suggestFloweringSucculentPlant = async (req, res) => {
//       try {
//         const randomFloweringPlant = await Plant.aggregate([
//           { 
//               $match: { 
//                 floweringPlant: true,
//                 watering : "Moderate",
//               } },
//           { $sample: { size: 1 } } 
//         ]);
    
//         if (randomFloweringPlant.length > 0) {
//           res.json(randomFloweringPlant[0]);
//         } else {
//           res.json({ message: 'No flowering plants found' });
//         }
//       } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Error fetching a random flowering plant' });
//       }
//     };