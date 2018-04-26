const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const RisqueShema = new Schema({
    Site : String, 
    Lot : String, 
    Ensemble : String, 
    Nature : String, 
    Adresse : String, 
    Compl_Adr : String, 
    Commune : String, 
    CP : String, 
    Usage : String, 
    Accessoire : String, 
    assujettissement : String, 
    Terme_fichier : String       
}); 

const risqueModel = mongoose.model('risque', RisqueShema);

module.exports = risqueModel;
