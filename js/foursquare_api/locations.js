import {CLIENT_ID, CLIENT_SECRET} from './CREDENTIALS';

export function getInitialLocations(cb) {
  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180716&ll=2.833292,-60.677004&intent=browse&radius=1000`)
  .then(response => response.json())
  .then(data => cb(data))
  .catch((error) => {window.alert("There was an error fetching locations!"); console.log(error)});
}
