import {CLIENT_ID, CLIENT_SECRET} from './CREDENTIALS';
import {center} from '../google_api/map';

export function getInitialLocations(cb) {
  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180716&ll=${center.lat},${center.lng}&intent=browse&radius=1000`)
  .then(response => response.json())
  .then(data => cb(data.response.groups[0].items))
  .catch((error) => {
    document.querySelector('#map').style.display = 'none';
    const errorWindow = document.createElement('div');
    errorWindow.style.width = '50%';
    errorWindow.style.height = '400px';
    errorWindow.style.position = 'absolute';
    errorWindow.style.marginTop = '10%';
    errorWindow.style.marginLeft = '30%';
    errorWindow.style.top = '100px';
    errorWindow.innerHTML = '<h1>There was an error fetching locations</h1></div>';
    document.body.appendChild(errorWindow);

    cb([])
  });
}

export function getFavorites(){
  const favorites = localStorage.getItem('favorites');
  if(!favorites){
    return {};
  }
  return JSON.parse(favorites);
}

export function addFavorite(locationId){
  try{
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if(!favorites){
      favorites = {};
    }
    favorites[locationId] = true;
    localStorage.setItem('favorites', JSON.stringify(favorites))
  } catch(e){
    window.alert('There was an error adding location to Favorites');
  }
}

export function removeFavorite(locationId){
  try{
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    delete favorites[locationId];
    localStorage.setItem('favorites', JSON.stringify(favorites))
  } catch(e){
    window.alert('There was an error adding location to Favorites');
  }
}
