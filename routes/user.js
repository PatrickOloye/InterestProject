const router = require('express').Router()
const authController = require('../controller/authController')
const userController = require('../controller/userController')
//const { isResetTokenValid } = require('../middleware/user')

router.post('/signup', authController.signup )
router.post('/login', authController.login )

router.post('/verify-email', authController.verifyEmail)
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)
router.patch('/updateMyPassword', authController.resetPassword)
router.patch('/updateMe', userController.updateMe)
router.patch('/deleteMe', userController.deleteMe)


module.exports = router