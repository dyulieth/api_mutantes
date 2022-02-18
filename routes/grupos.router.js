const express = require('express');
const router = express.Router();
const GruposService = require('../services/grupos.service');


const service = new GruposService();


router.get('/', async (req, res)=> {
  const grupos = await service.find();
  res.json(grupos);
});

router.get('/:id', async(req, res) =>{
    try {
      const {id} = req.params;
      const grupo = await service.findOne(id);
      res.json(grupo);
    } catch (error) {
        res.status(404).json({
        message: error.message
      });
    }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body;
    const newGrupo = await service.create(body);
    res.status(201).json(newGrupo);
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
    const grupo = await service.update(id, body);
    res.json(grupo);
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
