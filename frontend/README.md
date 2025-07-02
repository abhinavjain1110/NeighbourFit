# NeighbourFit Frontend

## Overview
NeighbourFit is a modern React app that helps you find the perfect neighbourhood in Mumbai based on your lifestyle and preferences. With a beautiful dark theme and a user-friendly interface, you can easily set your priorities for safety, affordability, amenities, walkability, and schools, and get personalized matches for your next home.

## Features
- 🌃 **Mumbai Focus**: Discover the best neighbourhoods in Mumbai tailored to your needs.
- 🎨 **Modern Dark Theme**: Enjoy a visually appealing, accessible interface with a premium look.
- 🏠 **Personalized Matching**: Set your preferences and see only the most relevant neighbourhoods.
- 📊 **Detailed Results**: Compare safety, affordability, amenities, walkability, and schools for each neighbourhood.
- 🔍 **Smart Filtering**: Only see neighbourhoods with a score higher than your calculated preference score.
- 📄 **Pagination**: Results are paginated (15 per page) for easy browsing.
- 👤 **Authentication**: Register and log in to save your preferences.
- 📝 **Multi-Page App**: Home, Preferences, Results, Login, Register.

## Home Page
The home page features a Mumbai-themed hero section, a bold headline, and a feature list explaining how NeighbourFit helps you find your ideal home in Mumbai.

## How to Run
```bash
cd frontend
npm install
npm start
```
App runs on [http://localhost:3000](http://localhost:3000) by default.

## API Usage
- Connects to backend at [http://localhost:3001](http://localhost:3001)
- Uses `/api/match` to get ranked neighbourhoods based on your preferences

## Project Structure
- `src/pages/Preferences.js`: User sets preferences for Mumbai neighbourhoods
- `src/pages/Results.js`: Shows paginated, filtered results with detailed info
- `src/pages/Login.js` & `src/pages/Register.js`: User authentication
- `src/App.js`: Main app, navigation, and beautiful home page

## Tech Stack
- React + Material UI (MUI)
- Modern CSS for dark theme
- Axios for API requests

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](../LICENSE)
