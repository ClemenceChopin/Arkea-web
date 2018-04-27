const RisqueController = require('../controllers/risque-controller');


module.exports = (server) => {

    server.get('/risques', RisqueController.readAll);
    server.get('/risque/:id', RisqueController.read);
    server.get('/risquebyterme/:terme', RisqueController.findterme);
    server.get('/count/risques/', RisqueController.count);
}

 