const express = require('express');
const router = express.Router();
const MutantesService = require('./../services/mutantes.service');

const service = new MutantesService();


router.get('/', async (req, res)=> {
  const mutantes = await service.find(req.query);
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
//busca por nombre
router.get('/:value', async(req, res) =>{
  try {
    const {name} = req.params;
    const mutante = await service.findOne(name);
    res.json(mutante);
  } catch (error) {
      res.status(404).json({
      message: error.message
    });
  }
})

//busca por ciudad
/*router.get('/', async(req, res) =>{
  try {
    const {name, city} = req.params;
    const mutante = await service.findOne(name, city);
    res.json(mutante);
  } catch (error) {
      res.status(404).json({
      message: error.message
    });
  }
})*/

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
