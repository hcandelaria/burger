//Packages
const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/',function(req,res){
  burger.all(function(data){
    let hbsBurger = { burgers : data };
    res.render('index', hbsBurger);
  });
});
router.post('/api/burgers',function(req,res){

  let col = (['burger_name','devoured']);
  let vals = ([req.body.burger_name,req.body.devoured]);

  burger.create(col,vals,function(result){
    res.json({ id : result.insertId});
  });
});
router.put('/api/burgers/:id',function(req,res){
  let col = { devoured: req.body.devoured };
  let condition = ('id = ' + req.params.id);

  burger.update(col, condition, function(result){
    if(result.changedRows === 0) return res.status(404).end();
    else res.status(200).end();
  });
});
router.delete('/api/burgers/:id',function(req,res){
  let condition = ('id = ' + req.params.id);

  burger.delete(condition,function(result){
    if(result.changedRows === 0 ) return res.status(404).end();
    else res.status(200).end();
  })

});

module.exports = router;
