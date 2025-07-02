const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Neighborhood } = require('./src/neighborhoods'); // adjust the path

dotenv.config(); // Load MONGO_URI from .env

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Sample data
const sampleNeighborhoods = [
  {
    name: "Bandra West",
    safety: 8,
    affordability: 4,
    amenities: 9,
    walkability: 9,
    schools: 8,
    description: "Trendy suburb known for cafes, nightlife, and sea views. Popular with expats and artists.",
    image: "https://i.imgur.com/zFVbOtU.jpg"
  },
  {
    name: "Andheri East",
    safety: 7,
    affordability: 6,
    amenities: 8,
    walkability: 7,
    schools: 7,
    description: "A commercial and residential hub with good metro connectivity and a mix of corporate offices and homes.",
    image: "https://i.imgur.com/xYazsz3.jpg"
  },
  {
    name: "Powai",
    safety: 8,
    affordability: 6,
    amenities: 9,
    walkability: 8,
    schools: 9,
    description: "Modern planned suburb around Powai Lake, known for IT companies, gated societies, and IIT Bombay.",
    image: "https://i.imgur.com/YmrDCj2.jpg"
  },
  {
    name: "Colaba",
    safety: 9,
    affordability: 3,
    amenities: 10,
    walkability: 9,
    schools: 7,
    description: "Historic and upscale area in South Mumbai, famous for Gateway of India and luxury shopping.",
    image: "https://i.imgur.com/2p0t4vL.jpg"
  },
  {
    name: "Dadar",
    safety: 7,
    affordability: 5,
    amenities: 7,
    walkability: 9,
    schools: 8,
    description: "Centrally located, culturally vibrant area with excellent train connectivity and traditional Maharashtrian vibe.",
    image: "https://i.imgur.com/6iWxajw.jpg"
  },
  {
    name: "Malad West",
    safety: 6,
    affordability: 7,
    amenities: 8,
    walkability: 6,
    schools: 7,
    description: "Affordable suburb in Western Mumbai with malls, beaches, and strong residential development.",
    image: "https://i.imgur.com/KHdD6Rt.jpg"
  },
  {
    name: "Goregaon East",
    safety: 7,
    affordability: 6,
    amenities: 8,
    walkability: 7,
    schools: 7,
    description: "A growing suburb with greenery, Film City, and good schools, located along the Western Express Highway.",
    image: "https://i.imgur.com/nRJoAab.jpg"
  },
  {
    name: "Chembur",
    safety: 8,
    affordability: 6,
    amenities: 7,
    walkability: 7,
    schools: 8,
    description: "Rapidly developing suburb in Eastern Mumbai, known for its connectivity and residential complexes.",
    image: "https://i.imgur.com/MpX6kDI.jpg"
  },
  {
    name: "Vile Parle",
    safety: 9,
    affordability: 5,
    amenities: 8,
    walkability: 8,
    schools: 9,
    description: "Residential and educational hub with excellent connectivity to airport and suburban railway.",
    image: "https://i.imgur.com/f0zOhiC.jpg"
  },
  {
    name: "Kurla",
    safety: 5,
    affordability: 8,
    amenities: 6,
    walkability: 7,
    schools: 6,
    description: "An affordable but crowded area with increasing development, connected via central and harbor lines.",
    image: "https://i.imgur.com/tn7TnO9.jpg"
  }
];


// Insert and close
async function seedDatabase() {
  try {
    await Neighborhood.deleteMany(); // optional: clean old data
    await Neighborhood.insertMany(sampleNeighborhoods);
    console.log("Sample neighborhoods inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting sample data:", err);
  }
}

seedDatabase();
