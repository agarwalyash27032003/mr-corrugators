const express = require("express")
const router = express.Router()

const {submitFormController} = require("../controllers/contactForm.controller")

router.post("/", submitFormController);

module.exports = router;