const express = require("express");
const router = express.Router();
//Posts is the instance we created in the Models File
const { Posts } = require("../models"); 

router.get("/", async(req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.get("/byId/:id", async(req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});

router.post("/", async(req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
})

module.exports = router;