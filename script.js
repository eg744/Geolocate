/*
   find client location
   show client long,lat on browser using navigator api

   routing with express-endpoint for data from api
   json parsing 
   post request with fetch

   is database required- can save the data from api to database or to as array or json that can be retrieved (local storage ok for local but does not exist server side) 

 */
// Express routing https://expressjs.com/en/api.html
const express = require('express');
const app = express();
// Environment port else 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('listening at ' + `${PORT}`);
});

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));
// static site with public directory
app.use(express.static('public'));
// Parse request as json
app.use(express.json({ limit: '1mb' }));
app.post('/api', (req, res) => {
   console.log('request', req.body);
   res.json({
      message: 'success',
   });
});
