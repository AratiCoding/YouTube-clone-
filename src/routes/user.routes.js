import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js'; // ✅ adjust path if needed

const router = Router();

router.route("/register").post(registerUser);

export default router;
