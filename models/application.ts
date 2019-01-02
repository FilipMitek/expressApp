import { bkshelf } from "../config/bookshelf";

export class Application extends bkshelf.Model<any> {
    constructor(app: any){
        super();
        this.tableName = 'application';
        this.attributes = {
            'name': app.name,
            'email': app.email,
            'message': app.message,
        };
    };
};




