import express from 'express';

const router = express.Router();

router.post('/create-student', UserControllers.createStudent);
