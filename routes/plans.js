const express = require('express');
const router = express.Router();
const {getPlanMessageById, getPlanMessage, getAllPlans, createPlan, createPlanNew} = require("../controllers/Plans")
const {getPostMessageById} = require("../controllers/posts")
const {getUserById} = require("../controllers/user")

router.param("userId",getUserById)
router.param("planid",getPlanMessageById)
router.param("postid",getPostMessageById)

router.post("/plan/create/",createPlan)
router.get("/plan/:planid",getPlanMessage)
router.get("/plans",getAllPlans)

module.exports = router

router.post("/plan/create/:postid/:userId",createPlanNew) ///,isSignedIn,isAuthenticated