


const express = require("express");
const app = express();

const zod = require("zod");

const schema = zod.array(zod.number());




var users = [{
  name: 'John',
  kidneys:[{
    healthy: false
  },{
    healthy: true
  }]
}]

console.log(users[0]);

app.use(express.json());

app.get("/", function( req , res ){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i = 0; i< johnKidneys.length ; i++)
  {
    if(johnKidneys[i].healthy){
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
  })
})


app.post("/", function( req , res ){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })  
  res.json({
    msg: "Done!"
  })
})

app.put("/", function( req, res){
  for(let i = 0; i < users[0].kidneys.length; i++)
  {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete("/", function( req, res){
  const newKidneys = [];
  for(let i = 0; i < users[0].kidneys.length; i++)
  {
    if(users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({msg: "done"});
})

app.listen(3000);