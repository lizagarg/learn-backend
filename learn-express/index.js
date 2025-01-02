//creating http server using express
const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  //write logic- user can check how many kidneys they have and how many are healthy
  const johnKidneys = users[0].kidneys;
  const number = johnKidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      healthyKidneys++;
    }
  }

  const unhealthyKidneys = number - healthyKidneys;
  res.json({
    number,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  // add kidney
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  //replace
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  //delete
    if(isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                  healthy: true,
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "done" });
    } else {
        res.status(411).json({
            msg:"you have no bad kidneys"
        });
    }
});

function isThereAtLeastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.listen(3000);
