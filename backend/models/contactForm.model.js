const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address"
      ]
    },

    number: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10,15}$/, "Please enter a valid phone number"]
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const contactFormModel = mongoose.model("contactForm", contactSchema);

module.exports = {
  contactFormModel
};