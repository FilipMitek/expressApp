import { Application } from "../models/application";
import {Request, Response, NextFunction} from "express";

export async function store(req: Request, res: Response, next: NextFunction){

    try{
        const create = await new Application({
            'name': req.body.name,
            'phone': req.body.phone,
            'message': req.body.message,
        }).save();
    } catch (err) {
        return next(err);
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