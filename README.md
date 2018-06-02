# Neighborhood Maps React App

  This is the final project of the Front End Web Developer Nanodegree Program through [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). Check out the [project rubric](https://review.udacity.com/#!/rubrics/1351/view). I took the project one step further than the requirements and allowed the user to choose a neighborhood and a category to filter a list of venues from the Foursquare API rather than hardcode a particular neighborhood with venues. The App experience however DOES NOT BEGIN until the user inputs a location. I chose this method rather than hard code a default location because I think it adds more depth to the experience of any user and shows more complexity in my code.

## Development tools

  - [react](https://github.com/facebook/react)
  - [redux](https://github.com/reduxjs/redux)
  - [react-google-maps](https://github.com/tomchentw/react-google-maps)
  - [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
  - [Foursquare API](https://developer.foursquare.com/docs/api/venues/search)
  - [superagent](https://github.com/visionmedia/superagent)
  - [Bootstrap v4.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Installation and usage

Clone the project from my GitHub profile, unzip, open your terminal, cd into the folder, run <code>npm install</code> to download the dependencies, and then refer to the create-react-app instructions that i've included below for usage. Running <code>npm start</code> will begin the development mode and serve the compiled application to your browser at [http://localhost:3000](http://localhost:3000).

#### This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

  You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Offline Capability

  As recommended in previous coursework, this project makes use of the create-react-app scaffolding tool. By default it includes a service worker however the default service worker does not cache assets obtained from API requests and unfortunately create-react-app does not currently support disabling or altering the default service worker. This issue is addressed in many forums with little resolution other than complicated methods currently outside of my scope of understanding. In hindsight i may not have used create-react-app to scaffold my project but I will be experimenting with this however to find a solution. For now the service worker does not cache the assets obtained from API requests and in previous coursework I have proven my understanding of service worker.
