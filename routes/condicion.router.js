const express = require('express');
const router = express.Router();
const CondicionService = require('../services/condicion.service');


const service = new CondicionService();


router.get('/', async (req, res)=> {
  const condicion = await service.find();
  res.json(condicion);
});

router.get('/:id', async(req, res) =>{
    try {
      const {id} = req.params;
      const condicion = await service.findOne(id);
      res.json(condicion);
    } catch (error) {
        res.status(404).json({
        message: error.message
      });
    }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body;
    const newCondicion = await service.create(body);
    res.status(201).json(newCondicion);
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
    const condicion = await service.update(id, body);
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
