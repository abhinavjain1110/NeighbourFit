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
    "name": "Lakeview 1",
    "safety": 7,
    "affordability": 5,
    "amenities": 8,
    "walkability": 9,
    "schools": 6,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_1.jpg"
  },
  {
    "name": "Pinehill 2",
    "safety": 8,
    "affordability": 6,
    "amenities": 10,
    "walkability": 5,
    "schools": 8,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_2.jpg"
  },
  {
    "name": "Oakridge 3",
    "safety": 9,
    "affordability": 3,
    "amenities": 5,
    "walkability": 9,
    "schools": 9,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_3.jpg"
  },
  {
    "name": "Oakridge 4",
    "safety": 5,
    "affordability": 8,
    "amenities": 10,
    "walkability": 5,
    "schools": 10,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_4.jpg"
  },
  {
    "name": "Hilltop 5",
    "safety": 9,
    "affordability": 7,
    "amenities": 5,
    "walkability": 10,
    "schools": 10,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_5.jpg"
  },
  {
    "name": "Greenwood 6",
    "safety": 6,
    "affordability": 7,
    "amenities": 5,
    "walkability": 7,
    "schools": 6,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_6.jpg"
  },
  {
    "name": "Hilltop 7",
    "safety": 7,
    "affordability": 6,
    "amenities": 7,
    "walkability": 10,
    "schools": 9,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_7.jpg"
  },
  {
    "name": "Hilltop 8",
    "safety": 7,
    "affordability": 7,
    "amenities": 8,
    "walkability": 5,
    "schools": 9,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_8.jpg"
  },
  {
    "name": "Brookside 9",
    "safety": 10,
    "affordability": 7,
    "amenities": 10,
    "walkability": 10,
    "schools": 8,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_9.jpg"
  },
  {
    "name": "Oakridge 10",
    "safety": 9,
    "affordability": 4,
    "amenities": 6,
    "walkability": 10,
    "schools": 6,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_10.jpg"
  },
  {
    "name": "Brookside 11",
    "safety": 9,
    "affordability": 4,
    "amenities": 6,
    "walkability": 5,
    "schools": 9,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_11.jpg"
  },
  {
    "name": "Riverside 12",
    "safety": 7,
    "affordability": 7,
    "amenities": 10,
    "walkability": 6,
    "schools": 7,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_12.jpg"
  },
  {
    "name": "Sunnyvale 13",
    "safety": 5,
    "affordability": 6,
    "amenities": 6,
    "walkability": 6,
    "schools": 6,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_13.jpg"
  },
  {
    "name": "Greenwood 14",
    "safety": 10,
    "affordability": 5,
    "amenities": 7,
    "walkability": 6,
    "schools": 6,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_14.jpg"
  },
  {
    "name": "Cedarvale 15",
    "safety": 10,
    "affordability": 4,
    "amenities": 9,
    "walkability": 7,
    "schools": 8,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_15.jpg"
  },
  {
    "name": "Riverside 16",
    "safety": 7,
    "affordability": 4,
    "amenities": 10,
    "walkability": 8,
    "schools": 9,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_16.jpg"
  },
  {
    "name": "Oakridge 17",
    "safety": 6,
    "affordability": 6,
    "amenities": 5,
    "walkability": 6,
    "schools": 6,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_17.jpg"
  },
  {
    "name": "Lakeview 18",
    "safety": 8,
    "affordability": 6,
    "amenities": 5,
    "walkability": 9,
    "schools": 8,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_18.jpg"
  },
  {
    "name": "Cedarvale 19",
    "safety": 9,
    "affordability": 8,
    "amenities": 10,
    "walkability": 7,
    "schools": 7,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_19.jpg"
  },
  {
    "name": "Pinehill 20",
    "safety": 8,
    "affordability": 8,
    "amenities": 10,
    "walkability": 6,
    "schools": 10,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_20.jpg"
  },
  {
    "name": "Maplewood 21",
    "safety": 7,
    "affordability": 6,
    "amenities": 7,
    "walkability": 7,
    "schools": 9,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_21.jpg"
  },
  {
    "name": "Pinehill 22",
    "safety": 5,
    "affordability": 4,
    "amenities": 7,
    "walkability": 9,
    "schools": 10,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_22.jpg"
  },
  {
    "name": "Hilltop 23",
    "safety": 10,
    "affordability": 4,
    "amenities": 9,
    "walkability": 7,
    "schools": 10,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_23.jpg"
  },
  {
    "name": "Sunnyvale 24",
    "safety": 5,
    "affordability": 6,
    "amenities": 10,
    "walkability": 6,
    "schools": 7,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_24.jpg"
  },
  {
    "name": "Lakeview 25",
    "safety": 6,
    "affordability": 7,
    "amenities": 5,
    "walkability": 10,
    "schools": 9,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_25.jpg"
  },
  {
    "name": "Lakeview 26",
    "safety": 5,
    "affordability": 8,
    "amenities": 7,
    "walkability": 7,
    "schools": 9,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_26.jpg"
  },
  {
    "name": "Oakridge 27",
    "safety": 6,
    "affordability": 6,
    "amenities": 8,
    "walkability": 9,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_27.jpg"
  },
  {
    "name": "Riverside 28",
    "safety": 9,
    "affordability": 7,
    "amenities": 7,
    "walkability": 7,
    "schools": 9,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_28.jpg"
  },
  {
    "name": "Cedarvale 29",
    "safety": 6,
    "affordability": 3,
    "amenities": 6,
    "walkability": 9,
    "schools": 7,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_29.jpg"
  },
  {
    "name": "Greenwood 30",
    "safety": 6,
    "affordability": 4,
    "amenities": 6,
    "walkability": 8,
    "schools": 7,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_30.jpg"
  },
  {
    "name": "Maplewood 31",
    "safety": 9,
    "affordability": 6,
    "amenities": 6,
    "walkability": 10,
    "schools": 8,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_31.jpg"
  },
  {
    "name": "Lakeview 32",
    "safety": 5,
    "affordability": 5,
    "amenities": 5,
    "walkability": 6,
    "schools": 9,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_32.jpg"
  },
  {
    "name": "Brookside 33",
    "safety": 9,
    "affordability": 6,
    "amenities": 10,
    "walkability": 5,
    "schools": 6,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_33.jpg"
  },
  {
    "name": "Hilltop 34",
    "safety": 6,
    "affordability": 8,
    "amenities": 6,
    "walkability": 8,
    "schools": 8,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_34.jpg"
  },
  {
    "name": "Brookside 35",
    "safety": 7,
    "affordability": 4,
    "amenities": 9,
    "walkability": 9,
    "schools": 7,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_35.jpg"
  },
  {
    "name": "Cedarvale 36",
    "safety": 8,
    "affordability": 3,
    "amenities": 9,
    "walkability": 9,
    "schools": 8,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_36.jpg"
  },
  {
    "name": "Lakeview 37",
    "safety": 5,
    "affordability": 7,
    "amenities": 9,
    "walkability": 5,
    "schools": 9,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_37.jpg"
  },
  {
    "name": "Pinehill 38",
    "safety": 5,
    "affordability": 6,
    "amenities": 5,
    "walkability": 7,
    "schools": 10,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_38.jpg"
  },
  {
    "name": "Greenwood 39",
    "safety": 5,
    "affordability": 8,
    "amenities": 9,
    "walkability": 9,
    "schools": 9,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_39.jpg"
  },
  {
    "name": "Riverside 40",
    "safety": 7,
    "affordability": 7,
    "amenities": 9,
    "walkability": 6,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_40.jpg"
  },
  {
    "name": "Greenwood 41",
    "safety": 10,
    "affordability": 3,
    "amenities": 6,
    "walkability": 10,
    "schools": 8,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_41.jpg"
  },
  {
    "name": "Pinehill 42",
    "safety": 10,
    "affordability": 6,
    "amenities": 9,
    "walkability": 9,
    "schools": 8,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_42.jpg"
  },
  {
    "name": "Sunnyvale 43",
    "safety": 6,
    "affordability": 8,
    "amenities": 6,
    "walkability": 7,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_43.jpg"
  },
  {
    "name": "Riverside 44",
    "safety": 6,
    "affordability": 7,
    "amenities": 9,
    "walkability": 5,
    "schools": 10,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_44.jpg"
  },
  {
    "name": "Maplewood 45",
    "safety": 9,
    "affordability": 3,
    "amenities": 9,
    "walkability": 9,
    "schools": 6,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_45.jpg"
  },
  {
    "name": "Riverside 46",
    "safety": 7,
    "affordability": 6,
    "amenities": 5,
    "walkability": 7,
    "schools": 9,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_46.jpg"
  },
  {
    "name": "Lakeview 47",
    "safety": 9,
    "affordability": 5,
    "amenities": 6,
    "walkability": 7,
    "schools": 9,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_47.jpg"
  },
  {
    "name": "Hilltop 48",
    "safety": 8,
    "affordability": 3,
    "amenities": 5,
    "walkability": 8,
    "schools": 8,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_48.jpg"
  },
  {
    "name": "Lakeview 49",
    "safety": 8,
    "affordability": 3,
    "amenities": 6,
    "walkability": 6,
    "schools": 8,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_49.jpg"
  },
  {
    "name": "Hilltop 50",
    "safety": 6,
    "affordability": 6,
    "amenities": 6,
    "walkability": 7,
    "schools": 9,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_50.jpg"
  },
  {
    "name": "Pinehill 51",
    "safety": 7,
    "affordability": 8,
    "amenities": 10,
    "walkability": 7,
    "schools": 6,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_51.jpg"
  },
  {
    "name": "Greenwood 52",
    "safety": 9,
    "affordability": 4,
    "amenities": 7,
    "walkability": 9,
    "schools": 6,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_52.jpg"
  },
  {
    "name": "Greenwood 53",
    "safety": 6,
    "affordability": 4,
    "amenities": 10,
    "walkability": 8,
    "schools": 10,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_53.jpg"
  },
  {
    "name": "Brookside 54",
    "safety": 8,
    "affordability": 3,
    "amenities": 8,
    "walkability": 7,
    "schools": 7,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_54.jpg"
  },
  {
    "name": "Hilltop 55",
    "safety": 8,
    "affordability": 7,
    "amenities": 7,
    "walkability": 5,
    "schools": 7,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_55.jpg"
  },
  {
    "name": "Lakeview 56",
    "safety": 5,
    "affordability": 4,
    "amenities": 5,
    "walkability": 7,
    "schools": 9,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_56.jpg"
  },
  {
    "name": "Sunnyvale 57",
    "safety": 9,
    "affordability": 8,
    "amenities": 8,
    "walkability": 9,
    "schools": 6,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_57.jpg"
  },
  {
    "name": "Sunnyvale 58",
    "safety": 7,
    "affordability": 6,
    "amenities": 8,
    "walkability": 8,
    "schools": 9,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_58.jpg"
  },
  {
    "name": "Sunnyvale 59",
    "safety": 10,
    "affordability": 4,
    "amenities": 9,
    "walkability": 5,
    "schools": 7,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_59.jpg"
  },
  {
    "name": "Greenwood 60",
    "safety": 8,
    "affordability": 4,
    "amenities": 6,
    "walkability": 6,
    "schools": 9,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_60.jpg"
  },
  {
    "name": "Cedarvale 61",
    "safety": 5,
    "affordability": 4,
    "amenities": 10,
    "walkability": 6,
    "schools": 8,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_61.jpg"
  },
  {
    "name": "Hilltop 62",
    "safety": 6,
    "affordability": 5,
    "amenities": 5,
    "walkability": 8,
    "schools": 6,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_62.jpg"
  },
  {
    "name": "Oakridge 63",
    "safety": 9,
    "affordability": 6,
    "amenities": 10,
    "walkability": 8,
    "schools": 8,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_63.jpg"
  },
  {
    "name": "Cedarvale 64",
    "safety": 8,
    "affordability": 7,
    "amenities": 9,
    "walkability": 9,
    "schools": 7,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_64.jpg"
  },
  {
    "name": "Hilltop 65",
    "safety": 5,
    "affordability": 3,
    "amenities": 5,
    "walkability": 9,
    "schools": 10,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_65.jpg"
  },
  {
    "name": "Sunnyvale 66",
    "safety": 6,
    "affordability": 3,
    "amenities": 9,
    "walkability": 10,
    "schools": 10,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_66.jpg"
  },
  {
    "name": "Oakridge 67",
    "safety": 7,
    "affordability": 8,
    "amenities": 9,
    "walkability": 6,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_67.jpg"
  },
  {
    "name": "Riverside 68",
    "safety": 8,
    "affordability": 3,
    "amenities": 5,
    "walkability": 6,
    "schools": 7,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_68.jpg"
  },
  {
    "name": "Cedarvale 69",
    "safety": 9,
    "affordability": 7,
    "amenities": 10,
    "walkability": 6,
    "schools": 9,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_69.jpg"
  },
  {
    "name": "Sunnyvale 70",
    "safety": 5,
    "affordability": 7,
    "amenities": 6,
    "walkability": 5,
    "schools": 7,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_70.jpg"
  },
  {
    "name": "Pinehill 71",
    "safety": 9,
    "affordability": 8,
    "amenities": 9,
    "walkability": 8,
    "schools": 8,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_71.jpg"
  },
  {
    "name": "Pinehill 72",
    "safety": 6,
    "affordability": 5,
    "amenities": 9,
    "walkability": 6,
    "schools": 6,
    "description": "Close-knit community with excellent schools.",
    "image": "https://example.com/images/neighborhood_72.jpg"
  },
  {
    "name": "Lakeview 73",
    "safety": 9,
    "affordability": 5,
    "amenities": 10,
    "walkability": 10,
    "schools": 6,
    "description": "Suburban feel with urban amenities.",
    "image": "https://example.com/images/neighborhood_73.jpg"
  },
  {
    "name": "Brookside 74",
    "safety": 6,
    "affordability": 7,
    "amenities": 5,
    "walkability": 8,
    "schools": 9,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_74.jpg"
  },
  {
    "name": "Greenwood 75",
    "safety": 7,
    "affordability": 5,
    "amenities": 10,
    "walkability": 7,
    "schools": 9,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_75.jpg"
  },
  {
    "name": "Pinehill 76",
    "safety": 6,
    "affordability": 6,
    "amenities": 9,
    "walkability": 9,
    "schools": 9,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_76.jpg"
  },
  {
    "name": "Riverside 77",
    "safety": 6,
    "affordability": 8,
    "amenities": 6,
    "walkability": 8,
    "schools": 6,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_77.jpg"
  },
  {
    "name": "Pinehill 78",
    "safety": 8,
    "affordability": 6,
    "amenities": 8,
    "walkability": 7,
    "schools": 7,
    "description": "Offers stunning views and vibrant nightlife.",
    "image": "https://example.com/images/neighborhood_78.jpg"
  },
  {
    "name": "Oakridge 79",
    "safety": 7,
    "affordability": 7,
    "amenities": 7,
    "walkability": 7,
    "schools": 7,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_79.jpg"
  },
  {
    "name": "Hilltop 80",
    "safety": 7,
    "affordability": 6,
    "amenities": 9,
    "walkability": 8,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_80.jpg"
  },
  {
    "name": "Greenwood 81",
    "safety": 6,
    "affordability": 6,
    "amenities": 5,
    "walkability": 9,
    "schools": 8,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_81.jpg"
  },
  {
    "name": "Pinehill 82",
    "safety": 7,
    "affordability": 5,
    "amenities": 5,
    "walkability": 7,
    "schools": 10,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_82.jpg"
  },
  {
    "name": "Brookside 83",
    "safety": 5,
    "affordability": 6,
    "amenities": 8,
    "walkability": 7,
    "schools": 8,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_83.jpg"
  },
  {
    "name": "Greenwood 84",
    "safety": 10,
    "affordability": 3,
    "amenities": 7,
    "walkability": 5,
    "schools": 7,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_84.jpg"
  },
  {
    "name": "Oakridge 85",
    "safety": 5,
    "affordability": 7,
    "amenities": 8,
    "walkability": 8,
    "schools": 7,
    "description": "Scenic area with lots of trails.",
    "image": "https://example.com/images/neighborhood_85.jpg"
  },
  {
    "name": "Greenwood 86",
    "safety": 8,
    "affordability": 3,
    "amenities": 10,
    "walkability": 7,
    "schools": 6,
    "description": "Modern apartments and tech hubs.",
    "image": "https://example.com/images/neighborhood_86.jpg"
  },
  {
    "name": "Brookside 87",
    "safety": 5,
    "affordability": 3,
    "amenities": 7,
    "walkability": 5,
    "schools": 9,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_87.jpg"
  },
  {
    "name": "Sunnyvale 88",
    "safety": 10,
    "affordability": 8,
    "amenities": 5,
    "walkability": 9,
    "schools": 7,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_88.jpg"
  },
  {
    "name": "Greenwood 89",
    "safety": 6,
    "affordability": 4,
    "amenities": 8,
    "walkability": 5,
    "schools": 6,
    "description": "Peaceful community with green spaces.",
    "image": "https://example.com/images/neighborhood_89.jpg"
  },
  {
    "name": "Riverside 90",
    "safety": 10,
    "affordability": 8,
    "amenities": 9,
    "walkability": 5,
    "schools": 10,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_90.jpg"
  },
  {
    "name": "Maplewood 91",
    "safety": 5,
    "affordability": 6,
    "amenities": 7,
    "walkability": 6,
    "schools": 6,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_91.jpg"
  },
  {
    "name": "Cedarvale 92",
    "safety": 9,
    "affordability": 6,
    "amenities": 6,
    "walkability": 9,
    "schools": 10,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_92.jpg"
  },
  {
    "name": "Brookside 93",
    "safety": 8,
    "affordability": 3,
    "amenities": 7,
    "walkability": 7,
    "schools": 6,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_93.jpg"
  },
  {
    "name": "Cedarvale 94",
    "safety": 7,
    "affordability": 8,
    "amenities": 8,
    "walkability": 10,
    "schools": 9,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_94.jpg"
  },
  {
    "name": "Lakeview 95",
    "safety": 8,
    "affordability": 7,
    "amenities": 6,
    "walkability": 5,
    "schools": 6,
    "description": "Historic district with charming homes.",
    "image": "https://example.com/images/neighborhood_95.jpg"
  },
  {
    "name": "Riverside 96",
    "safety": 9,
    "affordability": 8,
    "amenities": 7,
    "walkability": 6,
    "schools": 8,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://example.com/images/neighborhood_96.jpg"
  },
  {
    "name": "Greenwood 97",
    "safety": 5,
    "affordability": 4,
    "amenities": 8,
    "walkability": 6,
    "schools": 7,
    "description": "Known for high-quality schools and quiet streets.",
    "image": "https://example.com/images/neighborhood_97.jpg"
  },
  {
    "name": "Cedarvale 98",
    "safety": 6,
    "affordability": 7,
    "amenities": 7,
    "walkability": 9,
    "schools": 6,
    "description": "Bustling area with shops and restaurants.",
    "image": "https://example.com/images/neighborhood_98.jpg"
  },
  {
    "name": "Maplewood 99",
    "safety": 9,
    "affordability": 4,
    "amenities": 5,
    "walkability": 8,
    "schools": 7,
    "description": "Modern apartments and tech hubs.",
    "image": "https://www.poulomi.in/wp-content/uploads/2024/08/Poulomi-Avante-Kokapet_2024.08-8-1.jpg"
  },
  {
    "name": "Oakridge 100",
    "safety": 7,
    "affordability": 6,
    "amenities": 5,
    "walkability": 5,
    "schools": 6,
    "description": "A family-friendly neighborhood with parks and cafes.",
    "image": "https://www.poulomi.in/wp-content/uploads/2024/08/Poulomi-Avante-Kokapet_2024.08-8-1.jpg"
  }
]


// Insert and close
async function seedDatabase() {
  try {
    await Neighborhood.deleteMany(); // optional: clean old data
    sampleNeighborhoods.forEach(n => {
  n.image = "https://www.poulomi.in/wp-content/uploads/2024/08/Poulomi-Avante-Kokapet_2024.08-8-1.jpg";
});
    await Neighborhood.insertMany(sampleNeighborhoods);
    console.log("Sample neighborhoods inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting sample data:", err);
  }
}

seedDatabase();
