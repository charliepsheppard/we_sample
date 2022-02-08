const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateOrderInput = require("../../validation/orders")
const Order = require("../../models/Order");

router.get("/test", (req, res) => res.json({ msg: "This is the orders route" }));

router.get('/', (req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json({ noordersfound: 'No orders found' }));
});

router.get('/user/:user_id', (req, res) => {
    Order.find({user: req.params.user_id})
        .then(orders => res.json(orders))
        .catch(err =>
            res.status(404).json({ noordersfound: 'No orders found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err =>
            res.status(404).json({ noorderfound: 'No order found with that ID' })
        );
});

router.post("/", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validateOrderInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

    const newOrder = new Order({
        user: req.user.id,
        sample: req.body.sample
    });

    newOrder.save()
        .then(order => res.json(order));
})





module.exports = router;