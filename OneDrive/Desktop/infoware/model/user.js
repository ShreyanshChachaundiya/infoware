const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have name"],
    trim: true,
  },
  job: {
    type: String,
    required: [true, "A user must have job title"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please Provide us a valid Mobile Number"],
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  address:{ type: String, required: true },
  city:{type: String, required:true},
  state:{type: String, required:true},
  primary_emer:{type:String, required:true},
  mobile:{type: Number,require:true},
  second_emer:{type:String, required:true},
  mobile_sec:{type: Number,require:true},
});

const User = mongoose.model("User", userSchema);
module.exports = User;