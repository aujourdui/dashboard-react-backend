const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  id: Number,
  name: String,
  position: String,
  image: String,
});

const Member = mongoose.model("Member", memberSchema);

export default Member;
