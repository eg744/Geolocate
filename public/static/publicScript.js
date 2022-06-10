const documentCoordinatesButton = document.getElementById('getCoords');
const latitude = document.getElementById('lat');
const longitude = document.getElementById('long');

function getUserCoordinates() {
   if ('geolocation' in navigator) {
      console.log('geolocation available');
      // Async function to call geolocation
      navigator.geolocation.getCurrentPosition(async (position) => {
         const latitudeData = position.coords.latitude;
         const longitudeData = position.coords.longitude;

         const positionData = {
            latitudeData,
            longitudeData,
         };
         latitude.textContent = latitudeData;
         longitude.textContent = longitudeData;
         console.log(position);

         // declare data passed as json
         const options = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(positionData),
         };
         // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
         // receive response
         const response = await fetch('/api', options);
         const receivedJson = await response.json();
         console.log(receivedJson);
      });
   } else {
      console.log('geolocation not available');
   }
}
// async function postData(url='', data={})

documentCoordinatesButton.addEventListener('click', getUserCoordinates);
