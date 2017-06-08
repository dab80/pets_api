(function() {
  'use strict';

  // Bring in the module that we installed using npm
  //just like bringing in jQuery when we are in a browser
  let express = require('express');

  console.dir(express);

  // Create a new express app, called app.
  let app = express();

  // Create our first routem
  app.get('/', function(req, res) {
    res.send('<div>Hello world</div>');
  })

  app.get('/api/pets', function(req, res) {
    res.send({
      "data": {
        "pets": [{
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }]
      }
    });
  });
  app.get('/api/pets/1', function(req, res) {
    res.send({
      "id": 1,
      "name": "Fluffy",
      "age": 5,
      "uri": "/api/pets/1"
    });
  });

  app.get('/api/pets/2', function(req, res) {
    res.send({
      "id": 2,
      "name": "Bob",
      "age": 6,
      "uri": "/api/pets/2"
    });
  });

  app.listen(4786, () => {
    console.log('Example app listening on port 4786!')
  })

})();
