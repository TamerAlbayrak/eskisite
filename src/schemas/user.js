const { Schema, model } = require("mongoose");

const schema = Schema({
  userID: { type: String, default: "" }
});

module.exports = model("user", schema);