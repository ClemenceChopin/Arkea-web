const Risque = require("../modeles/risques")

module.exports = {
    readAll (req,res){
        Risque.find().then((risques)=>{
            res.send(risques);
        })
    },
    read (req,res){
        const {id} = req.params;
        Risque.findById(id).then((risques) =>{
            res.send(risques);
        })
    },
    findterme(req,res){
        const {terme} = req.params;
        Risque.find({Terme_fichier:terme}).then((risques) =>{
            res.send(risques)
        })
    },
    count(req,res){
        Risque.find().count().then((total) =>{
            res.send(total.toString());
        })
    }
}