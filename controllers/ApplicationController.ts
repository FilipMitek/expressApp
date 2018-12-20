import { Application, create } from "../models/application";

export function store(req, res) {

    create({
        'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message,
    }).then( () => {
            req.flash('form', req.body.first_name + ', you are true hero.');
            res.redirect('/');
    });
}




export function normalizeData(req, res, next) {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
}