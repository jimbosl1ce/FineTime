# FineTime - Evening Planning Made Easy
This project was built in a 48-hour time period, testing my ability to scope and execute a fullstack project.

Planning evenings out with friends or significant others can be challenging. 
* What do we eat?
* Which bars should we hit up after?
* What's our "activity" for the night?

Enter FineTime!

![gif](https://user-images.githubusercontent.com/43115008/158876469-321675e3-2c08-406d-ba8b-f98c7012cc3c.gif)


## :heavy_check_mark: Features

### FineTime Overview

* Select City
* Select Neighborhood & Show Time
* Identify nearby top-rated Restaurants and Bars
* Viola! Evening planned!

### Technologies Used

* Python - Selenium and BeautifulSoup4 custom scripts for web scraping
* MongoDB - Persistant storage
* NodeJS - Raspberry Pi-hosted local network server
* React - React Router + useReducer / useContext for app-wide state management
* Yelp API - For key, sign up at [Yelp Fusion](https://fusion.yelp.com/) 

## :heavy_check_mark: Setup
* .env file in root folder ~ example:
```
REACT_APP_YELP_API=''
REACT_APP_YELP_API_SECRET=''
REACT_APP_MONGO_URI=''
```
* `npm install` to install all dependencies
* In one terminal: `npm run start` to fire up React
* In another terminal: `npm run server` to fire up Express and MongoDB
* Lastly, run `python3 sanfrancisco.py` to scrape local San Francisco concert data and post to MongoDB instance
* Enjoy!

