import { Router } from 'express';
import { availableClassSessions, bookSpot, cancelBooking } from '../controllers/members-controllers.js';
import { validateMemberOnly, validateToken } from '../middlewares/middlewares.js';
export const memberRouter = Router();
memberRouter.get('/', availableClassSessions);
memberRouter.post('/newSpot', validateToken, validateMemberOnly, bookSpot);
memberRouter.post('/cancelling', validateToken, validateMemberOnly, cancelBooking);
//# sourceMappingURL=members-routes.js.map