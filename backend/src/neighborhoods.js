// Mock neighborhood data for MVP
const neighborhoods = [
  {
    id: 1,
    name: 'Greenwood',
    safety: 8,
    affordability: 7,
    amenities: 9,
    walkability: 8,
    schools: 7,
    description: 'A vibrant, family-friendly neighborhood with parks and cafes.'
  },
  {
    id: 2,
    name: 'Lakeview',
    safety: 6,
    affordability: 9,
    amenities: 6,
    walkability: 7,
    schools: 6,
    description: 'Affordable area with good transit and growing amenities.'
  },
  {
    id: 3,
    name: 'Downtown',
    safety: 5,
    affordability: 4,
    amenities: 10,
    walkability: 10,
    schools: 5,
    description: 'Urban core with nightlife, restaurants, and high walkability.'
  }
];

function getAllNeighborhoods() {
  return neighborhoods;
}

function matchNeighborhoods(preferences) {
  // Simple weighted scoring for MVP
  return neighborhoods
    .map(n => {
      let score = 0;
      score += (preferences.safety || 0) * n.safety;
      score += (preferences.affordability || 0) * n.affordability;
      score += (preferences.amenities || 0) * n.amenities;
      score += (preferences.walkability || 0) * n.walkability;
      score += (preferences.schools || 0) * n.schools;
      return { ...n, score };
    })
    .sort((a, b) => b.score - a.score);
}

module.exports = { getAllNeighborhoods, matchNeighborhoods }; 