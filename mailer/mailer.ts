import * as sgMail from '@sendgrid/mail';
import * as sgConfig from '../config/sendgrid';
import * as pug from 'pug';
import * as path from 'path';

export const send = async (options: any) => {
    (<any>Object).assign(sgConfig.message, {
        to: options.email,
        subject: options.subject,
        html: render(options.view, options.data)
    });

   return await  sgMail.send(sgConfig.message);
};

export const render = (filename: string, data: any) => {
    const currentPath = __dirname;
    return pug.renderFile(`${path.dirname(currentPath)}/views/${filename}.pug`, data);
};
