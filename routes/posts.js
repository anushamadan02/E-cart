const express = require('express');
const router = express.Router();
const {getPostMessageById, getPostMessage, getAllPosts, createPost, updatePost, deletePost} = require("../controllers/posts")
const {isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

router.param("userId",getUserById)
router.param("postid",getPostMessageById)

//Below thing used for form
router.post("/post/create/:userId",createPost)
//READ
router.get("/post/:postid",getPostMessage)
router.get("/posts",getAllPosts)
//UPDATE
router.put("/post/:postid",updatePost)
//DELETE
router.delete("/post/:postid",deletePost)
module.exports = router


