// Iteration #1
//connect to the database and seed the documents in it, in this case books
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
// ℹ️ Connects to the database
require("../db");

const drones = [
  {
    name: "UFO",
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "Red",
    propellers: 2,
    maxSpeed: 15,
  },
  {
    name: "Banana",
    propellers: 3,
    maxSpeed: 18,
  },
];

Drone.create(drones)
  .then((createdDrones) => {
    console.log(`Created ${createdDrones.length} drones`);

    mongoose.connection.close();
  })
  .catch((error) =>
    console.log("An Error ocurred on the book creation", error)
  );
