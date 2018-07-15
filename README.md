# Neiborhood Map

This is the fourth project for the Udacity Full Stack Web Developer Nanodegree.

It is a web application developed with KnockoutJS and the Google API that shows a map of my neighborhood with information about some locations.

## How to run the application

Node and NPM or Yarn are required to run this application.

You may download the application files or clone this repository with Git. Unless you have SSH configured on your computer, choose HTTPS:

`git clone https://github.com/geocarlos/neigborhood-map.git`

Once you have downloaded or cloned the repository, you will need a Google Maps API key. Once you have your API key, create a file named API_KEY.js in the js/google_api directory with the following content:

`export const API_KEY = 'YOUR_API_KEY';`, replacing 'YOUR_API_KEY' with the key you will get from Google. Click [here](https://developers.google.com/maps/documentation/javascript/get-api-key) if you do not know how to get a Google API Key.

from your terminal or cmd/PowerShell, run the following commands:

`npm install` - this will install the Node modules required by the application.

`bower install` - this will install KnockoutJS and Bootstrap as bower components.

`npm start` or `yarn start` - this will start a server and you may view the application on http:localhost:8080. Please note that unlike NPM, Yarn is not installed with Node.
