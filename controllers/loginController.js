const mongojs = require("mongojs");
//const db = mongojs("fullap", ["users"]);
const db = mongojs('fullapp', ["users"]);

const loginController = (req,res) => {
   // console.log('Radi');
   //preuzeti podatke req. body
   let nameIzForme = req.body.name;
   let passIzForme = req.body.password;
   console.log(nameIzForme,passIzForme);
   //res.redirect("/admin")
db.users.find({ first_name : nameIzForme, password: passIzForme}, (err,docs) =>{
    //db.users.find({ first_name : "maja"}, (err,docs) =>{
  //db.users.find( (err,docs) =>{
    console.log("ocitano");
    console.log(docs[0]);
    //console.log("baz"+docs[0]);
  //  res.redirect("/");
 
    if(err){
        console.log('greska');
res.redirect("/");

  }else{
    if(docs.length ===1 ){
        console.log('docs.length ===1');
// pronađen korisnik
let  user= docs[0]; 
req.session.user=user;


if(user.role =="admin"){
    console.log('user.role je admin');
    res.redirect("/admin")    //   odavde se usmerava na admin
}else{
     //console.log('docs.length ===2');
    res.redirect("/");
                }
   }else{
        //podaci nisu tacni
        res.redirect("/");
      }
      }
      } 
    )
    }
    module.exports = loginController;
