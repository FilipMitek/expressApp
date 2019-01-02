import { Request, Response } from "express";

export function notFound(req: Request, res: Response){
    const err: any = Error('404 pages not found.');
    err.status = 404;
    catchError(err, req, res);
}

export function catchError(err: any, req: Request, res: Response) {
    res.status = err.status || 500;
    const message = err.message.slice(err.message.lastIndexOf('-') + 1 , err.message.length);
    res.render('error', {
        'message' : message,
    });
    console.log(`Error occured ${message} ${err.status}`);
}