const mongojs = require("mongojs");
const db = mongojs('fullapp', ["users"]);

const createGrad= (req,res)=> {
    let name =req.body.name;
    let zip = req.body.zip;

    db.gradovi.insert({name: name, zip:zip}, (err, docs) => {
        //check
        res.redirect("/admin");
    });

};
module.export=createGrad;