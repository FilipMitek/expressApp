import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const message = {
    from: 'filip.mitek@interia.pl',
    mail_settings: {
        sandbox_mode: {
            enable: false
        }
    },

};




