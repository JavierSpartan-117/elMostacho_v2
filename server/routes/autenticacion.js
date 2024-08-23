import express from 'express';
import {
    getRoles,
    login,
    register
} from '../controllers/autenticacion.js';
const router = express.Router();

router.get('/roles', getRoles);
router.post('/login', login);
router.post('/register', register);

export default router;