const mysql = require('mysql');

connection = mysql.createConnection({
  host: '176.223.142.193',
  user: 'vallabares',
  password: 'b@r3s2019',
  database: 'vallabares.com'
});

let userModel = {};

userModel.getPlaces = (callback) => {
  if (connection) {
    connection.query('CALL Cargar_Establecimientos;',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getZone = (id, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Establecimientos_Por_Zona('+connection.escape(id)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getCathegory = (id, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Establecimientos_Por_Categoria('+connection.escape(id)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getPlaceDetails = (id, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Detalle_Establecimiento('+connection.escape(id)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows.slice(0, rows.length-1));
        }
      }
    )
  }
};

userModel.getRouteDetails = (id, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Detalle_Ruta_Concreta('+connection.escape(id)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

  userModel.getRouteDetails = (id, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Detalle_Ruta_Concreta('+connection.escape(id)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getAllZones = (callback) => {
  if (connection) {
    connection.query('CALL Cargar_Zonas;',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getAllCathegories = (callback) => {
  if (connection) {
    connection.query('CALL Cargar_Categorias;',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getRecipeList = (callback) => {
  if (connection) {
    connection.query('CALL Cargar_Listado_Recetas;',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.SetContactInformation = (req, callback) => {
if (connection) {
  connection.query('CALL Cargar_Contacto('+
    connection.escape(req.params.Email)+ ',' + 
    connection.escape(req.params.Desc) + ',' +
    connection.escape(req.params.Name) + ',' + 
    connection.escape(req.params.Subj) + ');',
    (err, rows) => {
      if (err) {
        throw err
      }
      else {
        callback(null, rows[0]);
      }
    }
  )
}
};

userModel.GetPlacesNearby = (req, callback) => {
if (connection) {
  connection.query('CALL Cargar_Establecimientos_Cercanos('+connection.escape(req.params.Lat)+ ',' + connection.escape(req.params.Lng) + ');',
    (err, rows) => {
      if (err) {
        throw err
      }
      else {
        callback(null, rows[0]);
      }
    }
  )
}
};

userModel.getAllRoutes = (category, callback) => {
  if (connection) {
    connection.query('CALL Cargar_Rutas('+connection.escape(category)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
};

userModel.getRoutesByCategoryAndZone = (category, zone, callback) => {
  if (connection) {
    connection.query('CALL Get_RoutesByZoneIdAndCategoryId('+connection.escape(category)+', '+connection.escape(zone)+');',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows[0]);
        }
      }
    )
  }
}

module.exports = userModel
