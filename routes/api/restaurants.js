const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Restaurant = require('../../models/Restaurant');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/registerRestaurant');
const validateLoginInput = require('../../validation/login');
const validateRestaurant = require('../../validation/restaurant')

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

router.get(
  "/restaurant/:ownerId",
  (req, res) => {
    Restaurant.find({ownerId: req.params.ownerId})
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norestaurantsfound: "No restaurants found for that user"}));
  }
)

router.post("/:restaurantOwnerId", (req, res) => {

  const { errors, isValid } = validateRestaurant(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Restaurant.findOne({ address: req.body.address }).then(restaurant => {
      if (restaurant) {
        errors.address = "Address has already been registered";
        return res.status(400).json(errors);
      } else {
          Restaurant.findOne({ restaurantName: req.body.restaurantName }).then(restaurant => {
            if (restaurant) {
              errors.handle = "Restaurant name has already been taken";
              return res.status(400).json(errors);
            }
          })
      
      }
  });

  const newRestaurant = new Restaurant({
        restaurantOwnerId: req.body.restaurantOwnerId,
        restaurantName: req.body.restaurantName,
        address: req.body.address,
        imageUrl: ""
      });

      newRestaurant.save()
        .then(restaurant => res.json(restaurant))
});


router.post("/login", (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Restaurant.findOne({ email }).then(restaurant => {
    if (!restaurant) {
      errors.email = "This restaurant does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, restaurant.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: restaurant.id, email: restaurant.email, restaurantName: restaurant.restaurantName, restaurantOwner: restaurant.restaurantOwner, address: restaurant.address, phoneNumber: restaurant.phoneNumber, imageUrl: restaurant.imageUrl };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.patch(
  "/:id",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Restaurant.findByIdAndUpdate((req.params.id), req.body, { new: true })
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(404).json({ norestaurantfound: "No restaurant found by that Id" }))
  }
)





module.exports = router;