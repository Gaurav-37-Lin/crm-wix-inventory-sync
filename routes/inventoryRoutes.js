const express = require("express");
const router = express.Router();
const { addOrUpdateInventory } = require("../controllers/addInventory");
const { removeInventory } = require("../controllers/removeInventory");

router.post("/addOrUpdate", addOrUpdateInventory);
router.post("/remove", removeInventory);

module.exports = router;
