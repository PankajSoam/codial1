const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const postsController = require('../controllers/posts_controller');

console.log("router loaded");

router.get('/user/post',postsController.posts);
router.get('/',homeController.home);

module.exports = router;
