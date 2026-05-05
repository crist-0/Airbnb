import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createBookingSchema } from '../../validators/booking.validator';
import { confirmBookingHandler } from '../../controllers/booking.controller';



const BookingRouter = express.Router();

BookingRouter.get('/', validateRequestBody(createBookingSchema), ); // TODO: Resolve this TS compilation issue
BookingRouter.post('/confirm/:idempotencyKey', confirmBookingHandler);

export default BookingRouter;