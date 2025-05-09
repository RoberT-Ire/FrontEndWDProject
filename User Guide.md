Features
___________________________________________________________________________________________
Shows your current location on an interactive map (using Leaflet + Capacitor Geolocation)

Lets you search for destinations using OpenStreetMap

Saves your last searched location (via Capacitor Preferences)

Works in modern browsers and mobile devices

Clean and responsive design

Pages Overview
___________________________________________________________________________________________
Home Page
Loads your current geographic location

Displays your coordinates

Geo Map PWA - User Guide Wiki

Centers an interactive map on your location

Includes a button to go to the search page

Search Page
Enter a location (e.g., Dublin, Tokyo, or Grand Canyon)

View the full place name from OpenStreetMap

The app saves the last place you searched

Includes a button to return to the map

How to Use
___________________________________________________________________________________________
Clone or download the project

Run the following commands from the root folder:

		npm install
		npx cap init geo-map-pwa com.example.geomappwa
		npx ng serve
		Open your browser to:

		http://localhost:4200
		Allow location access when prompted

Use the "Search for a Place" button to find and save locations

Data Persistence
___________________________________________________________________________________________
Your last search is automatically saved in local storage

When you return to the search page, it reloads your last input

Works in browsers and mobile environments

Notes
___________________________________________________________________________________________
This app uses standalone Angular components (no traditional NgModules)

The layout is responsive and tested on Chrome and Edge

You can run it as a PWA or install it on a phone via browser (when hosted)
