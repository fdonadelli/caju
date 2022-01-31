import RequestAuthorizer from "../../application/usecase/chain/RequestAuthorizer";

export default class AuthorizerController {

    async execute(body: any){
        const authorization = new RequestAuthorizer();
        const res = authorization.chain1.handle(body);
        return res;
    }
}