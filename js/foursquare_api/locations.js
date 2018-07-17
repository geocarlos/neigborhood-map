import {CLIENT_ID, CLIENT_SECRET} from './CREDENTIALS';
import {center} from '../google_api/map';

export function getInitialLocations(cb) {
  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180716&ll=${center.lat},${center.lng}&intent=browse&radius=1000`)
  .then(response => response.json())
  .then(data => cb(data.response.groups[0].items)).catch((error) => {
    window.alert("There was an error fetching locations!");
    console.log(error)
  });
}
