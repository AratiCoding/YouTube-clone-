import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js'; // ✅ adjust path if needed
import {upload} from "../middlewares/multer.middleware.js"
const router = Router();

router.route("/register").post(
     upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImnage",
            maxCount:1
        }
     ]),   
    registerUser
);

export default router;
