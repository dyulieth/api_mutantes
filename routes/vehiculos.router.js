const express = require('express');
const router = express.Router();
const VehiculoService = require('./../services/vehiculos.service');


const service = new VehiculoService();


router.get('/', async(req, res) =>{
  try {
    const vehiculo =  await service.find();
    res.json(vehiculo);
  } catch (error) {
    res.status(404).json({
      Message: error.Message
    });
  }

})

router.get('/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const vehiculo = await service.findOne(id);
    res.json(vehiculo);
  } catch (error) {
    res.status(404).json({
      Message: error.Message
    });
  }
})

router.post('/', async(req, res)=> {
  try {
    const body = req.body;
    const newVehiculo = await service.create(body);
    res.status(201).json(newVehiculo);
  } catch (error) {
    res.status(400).json({
      Message: error.Message
    });

  }

})



module.exports = router;
