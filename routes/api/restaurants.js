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

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Restaurant.findOne({ email: req.body.email }).then(stylist => {
    if (stylist) {
      errors.email = "Email has already been registered";
      return res.status(400).json(errors);
    } else {
      Restaurant.findOne({ restaurantName: req.body.restaurantName }).then(restaurant => {
        if (restaurant) {
          errors.handle = "Restaurant name has already been taken";
          return res.status(400).json(errors);
        }
      })
      const newRestaurant = new Restaurant({
        restaurantOwner: req.body.restaurantOwner,
        restaurantName: req.body.restaurantName,
        email: req.body.email,
        password: req.body.password,
        profileType: req.body.profileType,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        averageRating: req.body.averageRating,
        imageUrl: ""
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStylist.password, salt, (err, hash) => {
          if (err) throw err;
          newRestaurant.password = hash;
          newRestaurant
            .save()
            .then(restaurant => {
              const payload = { id: restaurant.id, restaurantName: restaurant.restaurantName };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
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