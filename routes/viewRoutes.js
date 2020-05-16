const express = require('express');
const viewsController = require('./../controllers/viewsController');
const router = express.Router();
const authController = require('./../controllers/authController');
const bookingController = require('./../controllers/bookingController');

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.login);
router.get('/signin', authController.isLoggedIn, viewsController.signup);
router.get('/me', authController.protect, viewsController.me);
router.get('/my-bookings', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
