import express from 'express';

import { signin, signup} from '../contollers/user.js'

const router = express.Router(); // createing router

router.post('/signin', signin);  //Sign in
router.post('/signup', signup);  //Sign Up

export default router;