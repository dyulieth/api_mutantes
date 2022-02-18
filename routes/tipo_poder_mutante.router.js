const express = require('express');
const router = express.Router();
const Tipo_poder_mutantesService = require('./../services/tipo_poder_mutantes.service');


const service = new MutantesService();
const serviceV = new VehiculosService();

router.get('/', async (req, res)=> {
  const mutantes = await service.find();
  res.json(mutantes);
});

router.get('/:id', async(req, res) =>{
    try {
      const {id} = req.params;
      const mutante = await service.findOne(id);
      res.json(mutante);
    } catch (error) {
        res.status(404).json({
        message: error.message
      });
    }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body;
    const newMutante = await service.create(body);
    res.status(201).json(newMutante);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

})

/*router.post('/:id/vehiculos', async(req, res)=>{
  try {
    const {id} = req.params;
    const mutante = await service.findOne(id);
    if(mutante){
      const body = req.body;
      const newVehiculo = await serviceV.create(id, body);
      res.status(201).json({newVehiculo, mutante});

    }
    else{
      res.status(404).json();
    }

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

})*/

router.patch('/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const mutante = await service.update(id, body);
    res.json(mutante);
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
