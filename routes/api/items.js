const express = require('express');
const router = express.Router();

//ITEM MODEL
const Item = require('../../models/Item');

//@rroute GET api/items
//@desc Get All Items
//@access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});


//@rroute POST api/items
//@desc Create a post
//@access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});


//@rroute GET api/items
//@desc Get All Items
//@access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});



module.exports = router;