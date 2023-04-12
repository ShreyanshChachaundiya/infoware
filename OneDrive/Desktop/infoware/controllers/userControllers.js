const User = require("../model/user");
const HttpError = require("../model/http-error");
const { validationResult } = require("express-validator");


exports.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    name,
    job,
    phoneNumber,
    email,
    address,
    city,
    state,
    primary_emer,
    mobile,
    second_emer,
    mobile_sec,
  } = req.body;

  const newUser = new User({
    name,
    job,
    phoneNumber,
    email,
    address,
    city,
    state,
    primary_emer,
    mobile,
    second_emer,
    mobile_sec,
  });

  try {
    await newUser.save();
    res.status(201).json({ user: newUser.toObject({ getters: true }) });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }
};

exports.getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

exports.getUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: user });
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const {
    name,
    job,
    phoneNumber,
    email,
    address,
    city,
    state,
    primary_emer,
    mobile,
    second_emer,
    mobile_sec,
  } = req.body;

  const id = req.params.id;

  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    const error = new HttpError("could not find a place", 404);
    //if we are in synchronous fun we can use throw otherwise next
    return next(error);
  }

  user.name = name;
  user.job = job;
  user.phoneNumber = phoneNumber;
  user.email = email;
  user.address = address;
  user.city = city;
  user.state = state;
  user.primary_emer = primary_emer;
  user.mobile = mobile;
  user.second_emer = second_emer;
  user.mobile_sec = mobile_sec;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError("failed", 500);
    return next(error);
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};
