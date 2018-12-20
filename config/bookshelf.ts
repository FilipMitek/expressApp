import * as knex from 'knex';
import {knexConf} from "./knexfile";
import * as bookshelf from 'bookshelf';

const knexo = knex(knexConf);
export const bkshelf = bookshelf(knexo);
