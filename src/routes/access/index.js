"use strict";

const express = require("express");
const accessController = require("../../controllers/access.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const router = express.Router();

//sign up
router.post("/shop/signup", asyncHandler(accessController.signUp));
router.post("/shop/login", asyncHandler(accessController.login));

//authentication
router.use(authentication);
router.post(
  "/shop/refreshToken",
  asyncHandler(accessController.handleRefreshToken)
);
router.post("/shop/logout", asyncHandler(accessController.logout));

module.exports = router;
