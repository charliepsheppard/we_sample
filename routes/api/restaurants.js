const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Restaurant = require('../../models/Restaurant');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the restaurants route" }));

router.get(
  "/",
  (req, res) => {
    Restaurant.find()
      .then(restaurants => res.json(restaurants))
  }
)

router.get("/search", (req,res)=> {
  Restaurant.findOne({restaurantName : req.body.restaurantName}).then(query => res.json(query))
})

router.get(
  "/:id",
  (req, res) => {
    Restaurant.findById(req.params.id)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(404).json({ norestaurantfound: 'No restaurant found with that ID' }));
  }
)






module.exports = router;