import {Error} from "create-error";
import { Request, Response, NextFunction } from "express";




export function notFound(req: Request, res: Response, next: NextFunction){
    const err: any = Error('404 pages not found.');
    err.status = 404;
    next(err);
}

export function catchError(err: any, req: Request, res: Response, next: NextFunction) {
    res.status = err.status || 500;
    const message = err.message.slice(err.message.lastIndexOf('-') + 1 , err.message.length);
    res.render('error', {
        //'message': `${err.message} ${err.status}`,
        'message' : message,
    });
    console.log(`Error occured ${message} ${err.status}`);
    next();
}