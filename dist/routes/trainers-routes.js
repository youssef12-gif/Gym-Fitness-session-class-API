import { Router } from "express";
import { validateToken, validateTrainerOnly, checkClassSessionInfo, compareTrainerNames, } from "../middlewares/middlewares.js";
import { viewAllBookings, createClassSession, modifyClassSession, deleteClassSession } from "../controllers/trainers-controllers.js";
import { availableClassSessions } from "../controllers/members-controllers.js";
export const trainerRouter = Router();
trainerRouter.get('/', availableClassSessions);
trainerRouter.get('/allBookings', validateToken, validateTrainerOnly, viewAllBookings);
trainerRouter.post('/newClassSession', validateToken, validateTrainerOnly, checkClassSessionInfo, createClassSession);
trainerRouter.put('/modifingClassSession', validateTrainerOnly, compareTrainerNames, modifyClassSession);
trainerRouter.delete('/unwantedClassSession', validateTrainerOnly, compareTrainerNames, deleteClassSession);
//# sourceMappingURL=trainers-routes.js.map