import * as express from 'express';
import * as PagesController from '../controllers/PagesController';
import * as ApplicationController from '../controllers/ApplicationController';

export const router = express.Router();

router.get('/', PagesController.home);
router.post('/applications',
    ApplicationController.validate,
    ApplicationController.checkValidation,
    ApplicationController.normalizeData,
    ApplicationController.store);
