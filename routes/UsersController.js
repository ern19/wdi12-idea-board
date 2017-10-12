const express = require("express")
const router = express.Router()
const { UserModel } = require("../db/Schema")

router.get("/", async(req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }

})

router.get("/:id", async(req, res) => {
  try {
    
    const userId = req.params.id
    console.log(userId)
    const user = await UserModel.findById(userId)
    console.log("hit")
    res.json(user)
  } catch (err) {
    console.log("brrrp")
    res.send(err)
  }

})

router.post("/", async(req, res) => {
  try {
    const newUser = new UserModel(req.body.user)
    console.log(newUser)
    const save = await newUser.save()
    res.json(save)
  } catch (err) {
    res.send(err)
  }
})
module.exports = router