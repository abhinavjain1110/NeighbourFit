# NeighborFit Backend

## Overview
Node.js/Express API for neighborhood data and matching algorithm.

## Endpoints

- `GET /api/neighborhoods` — List all neighborhoods
- `POST /api/match` — Submit user preferences, get ranked neighborhoods

## Data Structure
Neighborhoods have:
- id, name, safety, affordability, amenities, walkability, schools, description

## Running the Server
```
cd backend
npm install
npm start
```

Server runs on `http://localhost:3001` by default. 