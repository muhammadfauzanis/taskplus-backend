import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUserProfile,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
  verifyUser,
} from '../controllers/userController.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/update/:id', protectRoute, updateUser);
router.get('/profile/:query', getUserProfile);
router.put('/:id/verify/:verifcode', verifyUser);
router.get('/', getAllUser);
router.delete('/:id', deleteUser);

export default router;
