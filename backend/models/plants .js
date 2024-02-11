const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    id: {  // Add the _id field to the schema
        type: Number,
        required: true,
        unique: true, 
        auto: true 
      },
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  watering: {
    type: String,
    required: true,
  },
  sunlight: {
    type: String,
    required: true,
  },
  indoor: {
    type: Boolean,
    required: true,
  },
  outdoor: {
    type: Boolean,
    required: true,
  },
  floweringPlant: {
    type: Boolean,
    required: true,
  },
  succulents: {
    type: Boolean,
    required: true,
  },
  plantsCare: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    
  }
});

// Let MongoDB handle the auto-incrementing ID (_id field)

module.exports = mongoose.model('Plant', plantSchema);
