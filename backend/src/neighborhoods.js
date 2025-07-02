const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
  name: String,
  safety: Number,
  affordability: Number,
  amenities: Number,
  walkability: Number,
  schools: Number,
  description: String,
  image: String // URL or path to image
});

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

async function getAllNeighborhoods() {
  return await Neighborhood.find();
}

async function matchNeighborhoods(preferences) {
  const neighborhoods = await Neighborhood.find();
  return neighborhoods
    .map(n => {
      let score = 0;
      score += (preferences.safety || 0) * n.safety;
      score += (preferences.affordability || 0) * n.affordability;
      score += (preferences.amenities || 0) * n.amenities;
      score += (preferences.walkability || 0) * n.walkability;
      score += (preferences.schools || 0) * n.schools;
      return { ...n.toObject(), score };
    })
    .sort((a, b) => b.score - a.score);
}

module.exports = { Neighborhood, getAllNeighborhoods, matchNeighborhoods }; 