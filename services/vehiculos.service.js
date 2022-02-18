class VehiculosService{


  constructor(){
    this.vehiculos =[];

  }

  async create(body){
     const newVehiculo = {
       ...body

    }
    this.vehiculos.push(newVehiculo);
    return newVehiculo;
  }

  async find(){
    return this.vehiculos;
  }

  async findOne(id){
    const index = this.vehiculos.find(item => item.id === id)
    if (!index){
      throw new Error('Vehiculo no encontrado');
    }
    return this.vehiculos.find(item => item.id === id);

  }
}

module.exports = VehiculosService;
