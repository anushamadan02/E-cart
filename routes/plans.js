const express = require('express');
const router = express.Router();
const {getPlanMessageById, getPlanMessage, getAllPlans, createPlan} = require("../controllers/Plans")
const {getUserById} = require("../controllers/user")

router.param("userId",getUserById)
router.param("planid",getPlanMessageById)

router.post("/plan/create",createPlan)
//READ
router.get("/plan/:planid",getPlanMessage)
router.get("/plans",getAllPlans)

module.exports = router

