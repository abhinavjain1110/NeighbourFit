# NeighborFit Backend

## Overview
Node.js/Express API for neighborhood data and matching algorithm.

## Endpoints

- `GET /api/neighborhoods` — List all neighborhoods
- `POST /api/match` — Submit user preferences, get ranked neighborhoods

## Preferences API

- `GET /api/preferences` (auth required): Get the current user's preferences.
- `PUT /api/preferences` (auth required): Update the current user's preferences. Send JSON body with preference fields.

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