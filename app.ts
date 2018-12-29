import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
const connectFlash  = require('connect-flash');
import * as session from 'express-session';
import { router } from "./routes/RouteLoader";
import { catchError, notFound } from "./ErrorHandler/ErrorHandler";

export const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'dog hero',
    resave: false,
    saveUninitialized: true,
    cookie:{},
}));

app.use(connectFlash());
app.use('/', router);

app.use(notFound);
app.use(catchError);

