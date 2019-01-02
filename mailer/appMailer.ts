import { send } from "./mailer";

export const applicationNotify = (options: any)=> {
    const defaultOption = {
        subject: '[shelter for dogs] Thank you, Hero!',
        view: 'application-notification'
    };
    return send((<any>Object).assign(defaultOption, options));
};