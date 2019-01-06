import * as sgMail from '@sendgrid/mail';
import {Parameters} from "../Parameter";

sgMail.setApiKey(Parameters.SENDGRID_API_KEY);

export const message = {
    from: 'filip.mitek@interia.pl',
    mail_settings: {
        sandbox_mode: {
            enable: false
        }
    },

};




