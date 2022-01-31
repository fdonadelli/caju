import pgp from "pg-promise";
import Connection from "./Connection";

export default class PgPromiseConnectionAdapter implements Connection {
    pgp: any;

    constructor () {
        this.pgp = pgp()("postgres://postgres:pg2021@localhost:15432/postgres")
    }
    
    async query(statement: string, params: any[]): Promise<any> {
        return this.pgp.query(statement, params);
    }
    
}