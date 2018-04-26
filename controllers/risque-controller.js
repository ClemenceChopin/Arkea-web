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
    }
}