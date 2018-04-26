const RisqueController = require('../controllers/risque-controller');


module.exports = (server) => {

    server.get('/risques', RisqueController.readAll);
    server.get('/risque/:id', RisqueController.read);
}

 