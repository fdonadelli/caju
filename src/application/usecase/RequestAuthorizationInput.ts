import Account from "../../domain/entity/Account";

export default class RequestAuthorizationInput {

    constructor(readonly account: Account, readonly totalAmount: number, readonly mcc: string, readonly merchant: string){

    }
}