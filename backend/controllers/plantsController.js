
const express = require('express');
const router = express.Router();
const Plant = require('../models/plants ');  


exports.add = async(req,res)=>{
    try {
        const plant = new Plant(req.body);  
        await plant.save();  
        res.json({ message: 'Plant added successfully!' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding plant' });
      }
}


exports.allPlants = async(req,res)=>{
    try {
        const plants = await Plant.find();  // Retrieve all plants from the database
        res.json(plants);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching plants' });
      }
}
exports.updatePlant = async (req, res) => {
    try {
      const plant = await Plant.findById(req.params.id);
  
      if (!plant) {
        return res.status(404).json({ message: 'Plant not found' });
      }
  
      plant.price = req.body.price;
      
  
      await plant.save();
  
      res.json({ message: 'Plant updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating plant' });
    }
  };
  

  exports.indoorPlants = async (req, res) => {
    try {
      const indoorPlants = await Plant.find({ indoor: true }); // Use find() for multiple results
      res.json(indoorPlants);
    } catch (error) {
      console.error(error); // Use error.message for more informative logging
      res.status(500).json({ message: "Error fetching indoor plants" });
    }
  };


  exports.outdoorPlants = async (req, res) => {
    try {
      const outdoorPlants = await Plant.find({ outdoor: true }); // Use find() for multiple results
      res.json(outdoorPlants);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Error fetching indoor plants" });
    }
  };

  exports.floweringPlants = async (req, res) => {
    try {
      const floweringPlants = await Plant.find({ floweringPlant: true }); // Use find() for multiple results
      res.json(floweringPlants);
    } catch (error) {
      console.error(error); // Use error.message for more informative logging
      res.status(500).json({ message: "Error fetching flowering plants" });
    }
  };


  exports.succulents = async (req, res) => {
    try {
      const succulents = await Plant.find({ succulents: true }); // Use find() for multiple results
      res.json(succulents);
    } catch (error) {
      console.error(error); // Use error.message for more informative logging
      res.status(500).json({ message: "Error fetching succulent plants" });
    }
  };