# Neiborhood Map

Production files for GitHub Pages

[View the application in production](https://geocarlos.github.io/neigborhood-map/)

Refer to branch `master` for development files and detailed README file.

## Bairro São Francisco

"Bairro" is a word in Portuguese that may be translated as "neighborhood" or "district" - it is section of city or town. São Francisco is a neighborhood in the City of Boa Vista, the capital city of the state of Roraima, in Brazil. Comparing to other Brazilian cities, such as Manaus, Belém, São Paulo and Rio de Janeiro, Boa Vista looks pretty small. São Francisco is located near the city center.

## Changing the map

In case you would like to test this application with another location, just edit the variable "center", declared in - and exported from - js/google_api/map.js. That variable is imported into js/foursquare_api/locations.js to fetch places around the coordinates informed in that variable.
