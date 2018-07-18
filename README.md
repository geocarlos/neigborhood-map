# Neiborhood Map

This is the fourth project for the Udacity Full Stack Web Developer Nanodegree.

It is a web application developed with KnockoutJS and the Google API that shows a map of my neighborhood with information about some locations.

[View the application in production](https://geocarlos.github.io/neigborhood-map/)

## How to run the application

Node and NPM or Yarn are required to run this application.

You may download the application files or clone this repository with Git. Unless you have SSH configured on your computer, choose HTTPS:

`git clone https://github.com/geocarlos/neigborhood-map.git`

This application features a map powered by Google Maps API and information about locations provided by Foursquare API. Therefore, once you have downloaded or cloned the repository, you will need a Google Maps API key, for the map, and Foursquare credentials for location information. Once you have your API key, create a file named API_KEY.js in the js/google_api directory with the following content:

`export const API_KEY = 'YOUR_API_KEY';`, replacing 'YOUR_API_KEY' with the key you will get from Google. Click [here](https://developers.google.com/maps/documentation/javascript/get-api-key) if you do not know how to get a Google API Key.

For [Foursquare API](https://developer.foursquare.com/), you will have to create an account, if you do not have one already, to obtain your credentials, which are Client ID and Client Secret. Once you have them, create a file named CREDENTIALS.jS in the folder js/foursquare_api with this content:

`export const CLIENT_ID = '[YOUR_CLIENT_ID]';`

`export const CLIENT_SECRET = '[YOUR_CLIENT_SECRET]';`

Then, once you have your API key for Google Maps API and your credentials for Foursquare API, from your terminal or cmd/PowerShell, run the following commands:

`npm install` - this will install the Node modules required by the application.

`bower install` - this will install KnockoutJS and Bootstrap as bower components.

`npm start` or `yarn start` - this will start a server and you may view the application on http:localhost:8080. Please note that unlike NPM, Yarn is not installed with Node.

## Bairro São Francisco

"Bairro" is a word in Portuguese that may be translated as "neighborhood" or "district" - it is section of city or town. São Francisco is a neighborhood in the City of Boa Vista, the capital city of the state of Roraima, in Brazil. Comparing to other Brazilian cities, such as Manaus, Belém, São Paulo and Rio de Janeiro, Boa Vista looks pretty small. São Francisco is located near the city center.

## Changing the map

In case you would like to test this application with another location, just edit the variable "center", declared in - and exported from - js/google_api/map.js. That variable is imported into js/foursquare_api/locations.js to fetch places around the coordinates informed in that variable.
