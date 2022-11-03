import { Router } from "express";

import { CheckSubscriptionController } from "./Controllers/haircut/CheckSubscriptionController";
import { CountHaircutController } from "./Controllers/haircut/CountHaircutController";
import { CreateHaircutController } from "./Controllers/haircut/CreateHaircutController";
import { DetailHaircutController } from "./Controllers/haircut/DetailHaircutController";
import { ListHaircutController } from "./Controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "./Controllers/haircut/UpdateHaircutController";
import { FinishScheduleController } from "./Controllers/schedule/FinishScheduleController";
import { ListScheduleController } from "./Controllers/schedule/ListScheduleController";
import { NewScheduleController } from "./Controllers/schedule/NewScheduleController";
import { AuthUserController } from "./Controllers/Users/AuthUserController";
import { CreateUserController } from "./Controllers/Users/CreateUserController";
import { DetailUserController } from "./Controllers/Users/DetailUserController";
import { UpdateUserController } from "./Controllers/Users/UpdateUserController";

import { isAuthenticated } from "./Midwares/isAuthenticated";

const router = Router();


// -- Routes user --
router.post('/register', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);

// -- Routes haircut --
router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle);
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle);
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated, new CountHaircutController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().handle);

// -- Routes schedule/services --
router.post('/schedule', isAuthenticated, new NewScheduleController().handle);
router.get('/schedule', isAuthenticated, new ListScheduleController().handle);
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle);

export { router }