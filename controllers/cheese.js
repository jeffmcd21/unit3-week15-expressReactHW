
const express = require("express");
const Cheese = require("../models/Cheese");

const router = express.Router();

// INDEX ROUTE
router.get("/", async (req, res) => {
    try {
        res.json(await Cheese.find({}))

    } catch (error) {
        res.status(400).json(error);

    }
});

// CREATE ROUTE
router.post("/", async (req, res) => {
    try {
        res.json(await Cheese.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
});

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// GET ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// PUT ROUTE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;