import { Application } from "../models/application";
import {Request, Response, NextFunction} from "express";
import { catchError } from "../ErrorHandler/ErrorHandler";
import {check, validationResult} from "express-validator/check";
import * as appMailer from '../mailer/appMailer';


export const validate = [
    check('name').trim().isLength({min: 1}).withMessage('Name is required'),
    check('email').isLength({min: 1}).withMessage('Phone is required'),
    check('message').isLength({min: 1}).withMessage('Message is required'),
];

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if(! errors.isEmpty()){
            return res.render('home', {
                validated: req.body,
                errors: errors.mapped(),
                showLightbox: 'true'
            });
        }
        next();
};

// Store new application
export async function store(req: Request, res: Response ){
    try{
         const application = {
            'name': req.body.name,
            'email': req.body.email,
            'message': req.body.message,
        };
         await new Application(application).save();
         console.log(`Insert to database ${req.body.name}`);

        await appMailer.applicationNotify({
            email: application.email,
            data: { name: application.name }
        })
    }catch (err) {
       return catchError(err, req, res);
    }
    req.flash('form', req.body.first_name + ', you are true hero.');
    res.redirect('/');
}

export function normalizeData(req: Request, res: Response, next: NextFunction) {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();

}