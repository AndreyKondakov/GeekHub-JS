var express = require('express');
var router = express.Router();

/* GET dishes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const objectId = require("mongodb").ObjectID;
const jsonParser = express.json();



router.get("/api/dishes", function(req, res){

  const collection = req.app.locals.collection;
  collection.find({}).toArray(function(err, dishes){

    if(err) return console.log(err);
    res.send(dishes)
  });

});
router.get("/api/dishes/:id", function(req, res){

  const id = new objectId(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOne({_id: id}, function(err, dish){

    if(err) return console.log(err);
    res.send(dish);
  });
});

router.post("/api/dishes", jsonParser, function (req, res) {

  if(!req.body) return res.sendStatus(400);

  const dishName = req.body.name;
  const dishCalories = req.body.calories;
  const dish = {name: dishName, calories: dishCalories};

  const collection = req.app.locals.collection;
  collection.insertOne(dish, function(err, result){

    if(err) return console.log(err);
    res.send(dish);
  });
});

router.delete("/api/dishes/:id", function(req, res){

  const id = new objectId(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){

    if(err) return console.log(err);
    let dish = result.value;
    res.send(dish);
  });
});

router.put("/api/dishes", jsonParser, function(req, res){

  if(!req.body) return res.sendStatus(400);
  const id = new objectId(req.body.id);
  const dishName = req.body.name;
  const dishCalories = req.body.calories;

  const collection = req.app.locals.collection;
  collection.findOneAndUpdate({_id: id}, { $set: {calories: dishCalories, name: dishName}},
    {returnOriginal: false },function(err, result){

      if(err) return console.log(err);
      const dish = result.value;
      res.send(dish);
    });
});



module.exports = router;
