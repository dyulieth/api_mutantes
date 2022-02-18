const express = require('express');
const router = express.Router();
const Tipo_vehiculoService = require('../services/tipo_vehiculo.service');


const service = new Tipo_vehiculoService();


router.get('/', async (req, res)=> {
  const tipo_vehiculo = await service.find();
  res.json(tipo_vehiculo);
});

router.get('/:id', async(req, res) =>{
    try {
      const {id} = req.params;
      const tipo_vehiculo = await service.findOne(id);
      res.json(tipo_vehiculo);
    } catch (error) {
        res.status(404).json({
        message: error.message
      });
    }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body;
    const newTipo_vehiculo = await service.create(body);
    res.status(201).json(newTipo_vehiculo);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

})

router.patch('/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const tipo_vehiculo = await service.update(id, body);
    res.json(condicion);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }


})

router.delete('/:id', async(req,res)=>{
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);

})


module.exports = router;
