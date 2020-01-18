const User = require('../models/user');

//https://github.com/expressjs/cors 
const cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


module.exports = function(app) {

  app.get('/api/Establecimientos', cors(corsOptions), (req, res)  => {
    User.getPlaces((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Establecimiento/Zona/:IdZona', cors(corsOptions), (req, res)  => {
    var id = req.params.IdZona;
    User.getZone(id, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Establecimiento/Categoria/:IdCategoria', cors(corsOptions), (req, res)  => {
    var id = req.params.IdCategoria;
    User.getCathegory(id, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Establecimiento/Detalle/:IdDetalle', cors(corsOptions), (req, res)  => {
    var id = req.params.IdDetalle;
    User.getPlaceDetails(id, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Establecimiento/Ruta/:NombreRuta', cors(corsOptions), (req, res)  => {
    var ruta = req.params.NombreRuta;
    User.getRouteDetails(ruta, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Zonas', cors(corsOptions), (req, res)  => {
    User.getAllZones((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Categorias', cors(corsOptions), (req, res)  => {
    User.getAllCathegories((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/ListadoRecetas', cors(corsOptions), (req, res)  => {
    User.getRecipeList((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/GuardarContacto/:Email/:Desc/:Name/:Subj', cors(corsOptions), (req, res)  => {
    User.SetContactInformation(req, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/ListadoEstablecimientosCercanos/:Lat/:Lng', cors(corsOptions), (req, res)  => {
    User.GetPlacesNearby(req, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Rutas/:Category', cors(corsOptions), (req, res)  => {
    var category = req.params.Category;
    User.getAllRoutes(category, (err, data) => {
      res.status(200).json(data);
    });
  });

  app.get('/api/Rutas/:Category/:Zone', cors(corsOptions), (req, res)  => {
    var category = req.params.Category;
    var zone = req.params.Zone;
    User.getRoutesByCategoryAndZone(category, zone, (err, data) => {
      res.status(200).json(data);
    });
  });
}
