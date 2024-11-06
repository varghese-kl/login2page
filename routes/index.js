var express = require('express');
var router = express.Router();

const collection =require("./mongodb")


router.use(express.urlencoded({extended:false}))

 



/* GET home page. */
router.get('/', function(req, res,) {
  res.render( "login");
});
router.get('/signup', function(req, res,) {
  res.render( "signup");
});

router.post('/signup', async function(req, res,) {
  const data= {
    name : req.body.name,
    password :req.body.password
  }

  await collection.insertMany([data])
res.render("home")

    
});


router.post('/login', async function(req, res,) {

try{
const check = await collection.findOne({name : req.body.name})
if(check.password===req.body.password){
  res.render("home")
}
else{
  res.send('wrong password ')
}
}
catch{
res.send('wrong details')

}

})


module.exports = router;
