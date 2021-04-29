# Visualizing Data with Leaflet

## Description

![1-Logo](Images/1-Logo.png)

The purpose of this project is to visualize the earthquake data by the United States Geological Survey, or USGS for short. Hopefully, being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

### Tools
1. JavaScript libraries:
   -  Leaflet
2. HTML
3. CSS
4. Visual Studio Code

### Instructions
1. The main task here is to visualize the earthquake dataset, which entailed getting the dataset in GeoJSON format from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). I chose to visualize the earthquake data from the past seven days, with earthquakes of magnitude 4.5 and above. See data at (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson).
   ![3-Data](Images/3-Data.png)
   
2.   Next, is to create a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * Data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

   * **HINT** the depth of the earth can be found as the third coordinate for each earthquake.

   * There are popups that provide additional information about the earthquake when a marker is clicked.

   * Also, there is a legend that provides context for the map data.

   * The visualization looks something like the map below.



![Output-map](https://user-images.githubusercontent.com/71471355/116595697-cff4ce00-a8e0-11eb-8d34-10110f46e224.jpg)

### Steps
To run this project,
1. Open all the files with a visual studio code or any debugging environment.
2. Run the the index.html file with a live server, or simply run http://127.0.0.1:5501/index.html on your preferred web browser. This loads up the map on a web browser, and you can visualize the earthquake data.

### Files
1. The images folder contains some of the images used in this read me file.
2. index.html file is used to render the map on a web browser.
3. The static folder contains css and js folders.
4. The css folder contains style.css that styles our index.html page.
5. The js folder contains logic.js and config.js files.
6. config.js contains the API key for mapbox.
7. logic.js contains the JavaScript file that drives the visualization on index.html page.
