const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

let dbClient;

app.use(express.static(__dirname + "/public"));

app.get('/all-dish',function(req,res){
  res.sendFile(path.join(__dirname+'/all-dish'));
});

app.get('/day-dish',function(req,res){
  res.sendFile(path.join(__dirname+'/day-dish'));
});



mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("dishesdb").collection("dishes");
  app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
  });
});

app.get("/api/dishes", function(req, res){

  const collection = req.app.locals.collection;
  collection.find({}).toArray(function(err, dishes){

    if(err) return console.log(err);
    res.send(dishes)
  });

});
app.get("/api/dishes/:id", function(req, res){

  const id = new objectId(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOne({_id: id}, function(err, dish){

    if(err) return console.log(err);
    res.send(dish);
  });
});

app.post("/api/dishes", jsonParser, function (req, res) {

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

app.delete("/api/dishes/:id", function(req, res){

  const id = new objectId(req.params.id);
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){

    if(err) return console.log(err);
    let dish = result.value;
    res.send(dish);
  });
});

app.put("/api/dishes", jsonParser, function(req, res){

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

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});