const {contactFormModel} = require("../models/contactForm.model")

const submitFormController = async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    const savedData = await contactFormModel.create({
      name,
      email,
      number,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {submitFormController}