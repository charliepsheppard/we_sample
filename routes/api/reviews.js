const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Review = require("../../models/Review");
const validateReview = require("../../validation/review")

router.get(
  "/",
  (req, res) => {
    Review.find()
      .then(reviews => res.json(reviews))
      .catch(err => res.status(404).json({ noreviewsfound: "No review found" }));
  }
)

router.get(
  "/:reviewId",
  (req, res) => {
    Review.findById(req.body.id)
      .then(review => res.json(review))
      .catch(err => res.status(404).json({ noreviewsfound: "No review found by that ID" }));
  }
)

// router.get(
//   "/restuarant/:restaurantId",
//   (req, res) => {
//     Review.find({restaurantId: req.params.restaurantId})
//       .then(reviews => res.json(reviews))
//       .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
//   }
// )

router.get(
  "/reviewer/:reviewerId",
  (req, res) => {
    Review.find({reviewerId: req.params.reviewerId})
      .then(reviews => res.json(reviews))
      .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
  }
)

router.post(
  "/:restaurantId",
  (req, res) => {

    const { errors, isValid } = validateReview(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const newReview = new Review({
      reviewerId: req.body.reviewerId,
      restaurantId: req.body.restaurantId,
      sampleName: req.body.sampleName,
      orderId: req.body.orderId,
      title: req.body.title,
      body: req.body.body,

      rating: req.body.rating
    })
    newReview.save()
      .then(review => res.json(review))
  }
)

router.patch(
  "/:reviewId",
  (req, res) => {
    Review.findByIdAndUpdate((req.params.reviewId), req.body, { new: true })
      .then(review => res.json(review))
      .catch(err => res.status(404).json({ noreviewfound: "No review found by that Id" }))
  }
)

router.delete(
  "/:reviewId",
  (req, res) => {
    Review.deleteOne({_id: req.params.reviewId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ noreviewfound: "No review found by that Id" }))
  }
)
module.exports = router;


