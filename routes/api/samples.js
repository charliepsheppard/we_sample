const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Sample = require("../../models/Sample");
const validateSample = require("../../validation/sample")

router.get("/test", (req, res) => res.json({ msg: "This is the samples route" }));

router.get(
  "/",
  (req, res) => {
    Sample.find()
      .then(samples => res.json(samples))
      .catch(err => res.status(404).json({ nosamplesfound: "No samples found" }));
  }
)

router.get(
  "/:id",
  (req, res) => {
    Sample.findById(req.params.id)
      .then(sample => res.json(sample))
      .catch(err => res.status(404).json({ nosamplefound: "No sample found by that Id" }))
  }
)

router.get(
  "/menu/:restaurantId",
  (req, res) => {
    Sample.find({restaurantId: req.params.restaurantId})
      .then(samples => res.json(samples))
      .catch(err => res.status(404).json({ nosamplesfound: "No samples found by that restaurant Id"}))
  }
)

router.post(
  "/",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateSample(req.body);
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newSample = new Sample({
      sampleItem: req.body.sampleItem,
      description: req.body.description,
      price: req.body.price,
      restaurantId: req.body.restaurantId,
      imageUrl: req.body.imageUrl
    });

    Restaurant.updateOne({_id: req.body.restaurantId}, { $push: {samples: newSample}}).then(console.log('this worked'))
    newSample.save()
      .then(sample => res.json(sample));
  }
)

router.patch(
  "/:sampleId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Sample.findByIdAndUpdate((req.params.sampleId), req.body, { new: true })
      .then(sample => res.json(sample))
      .catch(err => res.status(404).json({ nosamplefound: "No sample found by that Id" }))
  }
)

router.delete(
  "/:sampleId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Sample.deleteOne({_id: req.params.sampleId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ nosamplefound: "No sample found by that Id" }))
  }
)

module.exports = router;