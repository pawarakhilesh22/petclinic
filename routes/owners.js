const express = require('express');
const router = express.Router();

/* Temporary Storage */
let owners = [];

/* Register Owner */
router.post('/register', (req, res) => {

    const {
        owner_name,
        address,
        contact,
        pet_name,
        pet_category
    } = req.body;

    const owner = {
        owner_name,
        address,
        contact,
        pet_name,
        pet_category
    };

    owners.push(owner);

    res.json({
        success: true,
        message: "Registration Successful"
    });

});

/* Get All Owners (Inventory) */
router.get('/', (req, res) => {

    res.json(owners);

});

/* Search Owners */
router.get('/search/:key', (req, res) => {

    const key = req.params.key.toLowerCase();

    const result = owners.filter(owner =>

        owner.owner_name.toLowerCase().includes(key) ||
        owner.pet_name.toLowerCase().includes(key) ||
        owner.pet_category.toLowerCase().includes(key)

    );

    res.json(result);

});

/* Search Owner */

router.get('/search/:key', (req, res) => {

    const key = req.params.key.toLowerCase();

    const result = owners.filter(owner =>

        owner.owner_name.toLowerCase().includes(key) ||
        owner.pet_name.toLowerCase().includes(key) ||
        owner.pet_category.toLowerCase().includes(key)

    );

    res.json(result);

});
const db = require('../db');

module.exports = router;