import { bkshelf } from "../config/bookshelf";

export const Application = bkshelf.Model;

export const create = (app) =>{
    return new Application({
        name: app.name,
        phone: app.phone,
        message: app.message,
    }).save();
};