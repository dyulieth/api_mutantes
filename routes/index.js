const express = require('express');
const mutantesRouter = require('./mutantes.router');
const vehiculosRouter = require('./vehiculos.router');
const gruposRouter = require('./grupos.router');
const condicionRouter = require('./condicion.router');
const tipo_vehiculoRouter = require('./tipo_vehiculo.router');
const tipo_poderRouter = require('./tipo_poder.router');



function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/mutantes', mutantesRouter);
  router.use('/vehiculos', vehiculosRouter);
  router.use('/grupos', gruposRouter);
  router.use('/condicion', condicionRouter);
  router.use('/tipo_vehiculo', tipo_vehiculoRouter);
  router.use('/tipo_poder', tipo_poderRouter);

}

module.exports = routerApi;
